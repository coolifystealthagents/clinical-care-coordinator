import { NextRequest, NextResponse } from 'next/server';

const apex = 'clinicalcarecoordinator.com';
const productionHosts = new Set([apex, `www.${apex}`]);

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host') || request.headers.get('host') || '';
  const host = forwardedHost.split(',')[0].trim().toLowerCase().split(':')[0];
  if (!productionHosts.has(host)) return NextResponse.next();

  const forwardedProto = (request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '')).split(',')[0].trim();
  if (host === apex && forwardedProto === 'https') return NextResponse.next();

  const canonical = request.nextUrl.clone();
  canonical.protocol = 'https:';
  canonical.host = apex;
  canonical.port = '';
  return NextResponse.redirect(canonical, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};