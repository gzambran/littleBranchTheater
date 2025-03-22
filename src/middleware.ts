import { NextRequest, NextResponse } from 'next/server';

const PASSWORD_PROTECTION_ENABLED = false;

export function middleware(request: NextRequest) {
  if (!PASSWORD_PROTECTION_ENABLED) {
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/images') ||
    request.nextUrl.pathname.includes('/favicon')
  ) {
    return NextResponse.next();
  }

  const basicAuth = request.headers.get('authorization');
  
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');
    
    if (user === 'littlebranch' && pwd === 'preview') {
      return NextResponse.next();
    }
  }

  return new NextResponse('Site under construction', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Preview Site"',
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};