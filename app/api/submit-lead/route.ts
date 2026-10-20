import { NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '@/lib/lead-fallback-mattermost';

const MAX_BODY_BYTES = 24_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 6;
const personalDomains = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);
const companySizes = new Set(['1 to 10', '11 to 50', '51 to 200', '201 to 500', '501+']);
const positionCounts = new Set(['1', '2 to 3', '4 to 10', '11+', 'Not sure yet']);
const referralSources = new Set(['Search engine', 'Referral', 'Healthcare network', 'Social media', 'Stealth Agents', 'Other']);
const phoneCountries = new Set(['+1', '+44', '+61', '+63', 'other']);
const allowedFields = new Set([
  'first_name', 'last_name', 'email', 'phone_country', 'phone', 'company',
  'company_website', 'company_size', 'positions_to_fill', 'referral_source',
  'message', 'source', 'website_url',
]);
const rateBuckets = new Map<string, number[]>();

function json(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (!origin || !host) return false;
  try {
    const originHost = new URL(origin).host.toLowerCase();
    return originHost === host.toLowerCase() ||
      (originHost === 'clinicalcarecoordinator.com' && host.toLowerCase() === 'www.clinicalcarecoordinator.com') ||
      (originHost === 'www.clinicalcarecoordinator.com' && host.toLowerCase() === 'clinicalcarecoordinator.com');
  } catch {
    return false;
  }
}

function clientKey(request: Request) {
  return request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (rateBuckets.get(key) || []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  rateBuckets.set(key, recent);
  if (rateBuckets.size > 2_000) {
    for (const [bucketKey, values] of rateBuckets) {
      if (!values.some((time) => now - time < RATE_WINDOW_MS)) rateBuckets.delete(bucketKey);
    }
  }
  return false;
}

function value(form: FormData, name: string, max: number) {
  const entry = form.get(name);
  if (typeof entry !== 'string') return '';
  return entry.trim().slice(0, max + 1);
}

export async function POST(request: Request) {
  if (!isSameOrigin(request) || request.headers.get('x-requested-with') !== 'clinical-care-contact-form') {
    return json('Request origin was not accepted.', 403);
  }
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().startsWith('multipart/form-data;')) {
    return json('Unsupported request format.', 415);
  }
  const declaredLength = Number(request.headers.get('content-length') || '0');
  if (!Number.isFinite(declaredLength) || declaredLength > MAX_BODY_BYTES) return json('Request is too large.', 413);

  let form: FormData;
  try {
    const body = await request.arrayBuffer();
    if (body.byteLength > MAX_BODY_BYTES) return json('Request is too large.', 413);
    form = await new Request(request.url, {
      method: 'POST',
      headers: request.headers,
      body,
    }).formData();
  } catch {
    return json('The form could not be read.', 400);
  }

  const entries = [...form.entries()];
  if (entries.length > allowedFields.size || entries.some(([key]) => !allowedFields.has(key))) {
    return json('The form contained an unexpected field.', 400);
  }
  const keys = entries.map(([key]) => key);
  if (new Set(keys).size !== keys.length) return json('The form contained a repeated field.', 400);
  if (value(form, 'website_url', 120)) return json('The request was not accepted.', 400);

  const firstName = value(form, 'first_name', 80);
  const lastName = value(form, 'last_name', 80);
  const email = value(form, 'email', 160).toLowerCase();
  const phoneCountry = value(form, 'phone_country', 8) || '+1';
  const phone = value(form, 'phone', 32);
  const company = value(form, 'company', 120);
  const companyWebsite = value(form, 'company_website', 240);
  const companySize = value(form, 'company_size', 24);
  const positions = value(form, 'positions_to_fill', 24);
  const referral = value(form, 'referral_source', 40);
  const message = value(form, 'message', 800);

  if (!firstName || !lastName || !company || !/^\S+@\S+\.\S+$/.test(email)) {
    return json('Please complete every required field.', 400);
  }
  if ([firstName, lastName].some((item) => item.length > 80) || company.length > 120 || email.length > 160 || message.length > 800) {
    return json('One or more fields are too long.', 400);
  }
  if (personalDomains.has(email.split('@')[1])) return json('Please use your business email address.', 400);
  if (!companySizes.has(companySize) || !positionCounts.has(positions) || !referralSources.has(referral) || !phoneCountries.has(phoneCountry)) {
    return json('Please choose a valid option for every required field.', 400);
  }
  if (companyWebsite) {
    try {
      const parsed = new URL(companyWebsite);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('protocol');
    } catch {
      return json('Please enter a valid company website URL.', 400);
    }
  }
  if (phone && !/^[0-9 ()+.-]{5,32}$/.test(phone)) return json('Please enter a valid phone number.', 400);
  if (isRateLimited(clientKey(request))) return json('Too many requests. Please wait and try again.', 429);

  const delivery = await sendLeadFallbackToMattermost({
    name: `${firstName} ${lastName}`,
    email,
    phone: `${phoneCountry} ${phone}`.trim(),
    business: company,
    website: companyWebsite,
    message,
    companySize,
    positions,
    referral,
    pageUrl: request.headers.get('referer') || 'https://clinicalcarecoordinator.com/contact-us',
    userAgent: request.headers.get('user-agent') || undefined,
  });
  if (!delivery.delivered) {
    return json('We could not deliver your request right now. Your information was not accepted. Please try again later.', 503);
  }

  return NextResponse.json(
    { ok: true, status: 'delivered' },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
