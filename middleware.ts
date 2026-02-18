import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isPF =
    hostname.includes('pickedfor.com') ||
    hostname.includes('pickedfor.localhost');

  // On pickedfor.com, only allow proposal/pickedfor/r/ paths and static assets
  if (isPF) {
    const { pathname } = request.nextUrl;
    const allowed =
      pathname.startsWith('/proposal') ||
      pathname.startsWith('/pickedfor') ||
      pathname.startsWith('/r/') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/favicon') ||
      pathname.startsWith('/api') ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml';

    if (!allowed) {
      const url = request.nextUrl.clone();
      url.pathname = '/proposal';
      return NextResponse.redirect(url);
    }
  }

  // Set a header so layouts can detect which domain
  const res = NextResponse.next();
  res.headers.set('x-pickedfor', isPF ? '1' : '0');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
