import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isPF =
    hostname.includes('pickedfor.com') ||
    hostname.includes('pickedfor.localhost');

  // On pickedfor.com, only allow specific proposal/detail links — NOT indexes
  if (isPF) {
    const { pathname } = request.nextUrl;

    // Allow: /proposal/[id] (specific proposals, must have an ID after /proposal/)
    // Allow: /pickedfor/detail/[slug] (specific detail pages)
    // Allow: /r/ (legacy demo routes)
    // Allow: static assets
    // BLOCK: /proposal (index), /pickedfor/detail (index), /search, everything else
    const allowed =
      (pathname.startsWith('/proposal/') && pathname !== '/proposal/') ||
      (pathname.startsWith('/pickedfor/detail/') && pathname !== '/pickedfor/detail/') ||
      pathname.startsWith('/r/') ||
      pathname.startsWith('/_next') ||
      pathname.startsWith('/favicon') ||
      pathname.startsWith('/api') ||
      pathname === '/robots.txt' ||
      pathname === '/sitemap.xml';

    if (!allowed) {
      // Return 404 for blocked pages — don't reveal what exists
      return new NextResponse('Not Found', { status: 404 });
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
