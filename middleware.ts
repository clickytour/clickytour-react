import { NextRequest, NextResponse } from 'next/server';

function isPickedforRoute(pathname: string) {
  return (
    pathname.startsWith('/proposal/') ||
    pathname.startsWith('/pickedfor/') ||
    pathname.startsWith('/r/')
  );
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  const isPickedforHost =
    hostname.includes('pickedfor.com') ||
    hostname.includes('pickedfor.localhost');

  const isPF = isPickedforHost || isPickedforRoute(pathname);

  // On pickedfor.com, only allow specific proposal/detail links — NOT indexes
  if (isPickedforHost) {
    // Allow: /proposal/[id] (specific proposals, must have an ID after /proposal/)
    // Allow: /pickedfor/detail/[slug] (specific detail pages)
    // Allow: /r/ (legacy demo routes)
    // Allow: static assets
    // BLOCK: /proposal (index), /pickedfor/detail (index), everything else
    const allowed =
      (pathname.startsWith('/proposal/') && pathname !== '/proposal/') ||
      (pathname.startsWith('/pickedfor/detail/') && pathname !== '/pickedfor/detail/') ||
      pathname.startsWith('/search') ||
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

  // Set a REQUEST header so server components/layouts can detect pickedfor context
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pickedfor', isPF ? '1' : '0');

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Optional response header for debugging at the edge
  res.headers.set('x-pickedfor', isPF ? '1' : '0');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
