import { type NextRequest } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'clinical-care-coordinator';
const MAX_BODY_BYTES = 512_000;
const MAX_BATCH_ITEMS = 200;

export const runtime = 'nodejs';

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (!origin || !host) return false;
  try {
    const originHost = new URL(origin).host.toLowerCase();
    const requestHost = host.toLowerCase();
    const productionHosts = ['clinicalcarecoordinator.com', 'www.clinicalcarecoordinator.com'];
    return originHost === requestHost ||
      (productionHosts.includes(originHost) && productionHosts.includes(requestHost));
  } catch {
    return false;
  }
}

function record(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function validEvent(value: unknown) {
  if (!record(value)) return false;
  return typeof value.event_type === 'string' && value.event_type.length > 0 && value.event_type.length <= 160 &&
    typeof value.timestamp === 'string' && value.timestamp.length <= 64 &&
    (value.event_metadata === undefined || typeof value.event_metadata === 'string');
}

function validPayload(payload: unknown) {
  if (!record(payload)) return false;
  if (payload.site_id !== SITE_ID) return false;
  if (!Array.isArray(payload.events) || payload.events.length < 1 || payload.events.length > MAX_BATCH_ITEMS) return false;
  return payload.events.every(validEvent);
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) {
    return Response.json({ status: 'error', detail: 'Origin rejected' }, { status: 403 });
  }
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) {
    return Response.json({ status: 'error', detail: 'JSON required' }, { status: 415 });
  }

  const declaredLength = Number(request.headers.get('content-length') || '0');
  if (declaredLength > MAX_BODY_BYTES) {
    return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
  }

  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });
    }

    let payload: unknown;
    try {
      payload = JSON.parse(body);
    } catch {
      return Response.json({ status: 'error', detail: 'Invalid JSON' }, { status: 400 });
    }
    if (!validPayload(payload)) {
      return Response.json({ status: 'error', detail: 'Invalid event payload' }, { status: 400 });
    }

    const clientIp = request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || '0.0.0.0';
    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'X-Forwarded-For': clientIp,
        'X-ACR-Client-IP': clientIp,
      },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(8_000),
    });

    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return Response.json({ status: 'error' }, { status: 502 });
  }
}
