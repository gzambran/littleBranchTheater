import { NextRequest, NextResponse } from 'next/server';

// Set this to false to disable password protection
const PASSWORD_PROTECTION_ENABLED = true;

export function middleware(request: NextRequest) {
  // Skip if password protection is disabled
  if (!PASSWORD_PROTECTION_ENABLED) {
    return NextResponse.next();
  }

  // Skip password protection for static assets
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/images') ||
    request.nextUrl.pathname.includes('/favicon')
  ) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const basicAuth = request.headers.get('authorization');
  
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');
    
    // Simple hardcoded credentials
    if (user === 'littlebranch' && pwd === 'preview') {
      return NextResponse.next();
    }
  }
  
  // Not authenticated - prompt for password
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