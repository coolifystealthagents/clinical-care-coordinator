'use server';

const SITE_ID = 'clinical-care-coordinator';

export interface FallbackLeadPayload {
  name: string;
  email: string;
  phone: string;
  business?: string;
  website?: string;
  message?: string;
  companySize?: string;
  positions?: string;
  referral?: string;
  pageUrl: string;
  userAgent?: string;
}

export type LeadDeliveryResult =
  | { delivered: true }
  | { delivered: false; reason: 'not_configured' | 'rejected' | 'unavailable' };

export async function sendLeadFallbackToMattermost(lead: FallbackLeadPayload): Promise<LeadDeliveryResult> {
  const webhook = process.env.SITE_MATTERMOST_FALLBACK_WEBHOOK_URL?.trim();
  if (!webhook) return { delivered: false, reason: 'not_configured' };

  try {
    const parsed = new URL(webhook);
    const localTestHost = ['127.0.0.1', 'localhost', '::1'].includes(parsed.hostname);
    if (parsed.protocol !== 'https:' && !localTestHost) return { delivered: false, reason: 'not_configured' };
  } catch {
    return { delivered: false, reason: 'not_configured' };
  }

  const lines = [
    `**[SITE-DIRECT:${SITE_ID}] New consultation request — ${escapeMd(lead.name || lead.email || lead.phone || 'unknown')}**`,
    `_Delivered by the site server; the workflow description is not sent through browser analytics_`,
    '', '| Field | Value |', '|---|---|',
    `| Site | ${escapeMd(SITE_ID)} |`,
    `| Name | ${escapeMd(lead.name) || '_(empty)_'} |`,
    `| Email | ${escapeMd(lead.email) || '_(empty)_'} |`,
    `| Phone | ${escapeMd(lead.phone) || '_(empty)_'} |`,
    `| Business | ${escapeMd(lead.business) || '-'} |`,
    `| Website | ${escapeMd(lead.website) || '-'} |`,
    `| Company size | ${escapeMd(lead.companySize) || '-'} |`,
    `| Positions | ${escapeMd(lead.positions) || '-'} |`,
    `| Referral | ${escapeMd(lead.referral) || '-'} |`,
    `| Page | ${escapeMd(lead.pageUrl) || '-'} |`,
    `| Time | ${new Date().toISOString()} |`,
    '',
    lead.message ? `**Administrative workflow:**\n> ${escapeMd(lead.message).replace(/\n/g, '\n> ')}` : '',
  ].filter(Boolean);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5_000);
  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: lines.join('\n'), username: `${SITE_ID} Direct`, icon_emoji: ':incoming_envelope:' }),
      signal: controller.signal,
      cache: 'no-store',
    });
    return response.ok ? { delivered: true } : { delivered: false, reason: 'rejected' };
  } catch {
    return { delivered: false, reason: 'unavailable' };
  } finally {
    clearTimeout(timeout);
  }
}

function escapeMd(value: string | undefined): string {
  if (!value) return '';
  return String(value).replace(/[|`*_\\]/g, (character) => `\\${character}`).slice(0, 1_000);
}
