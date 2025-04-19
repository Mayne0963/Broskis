import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;
  if (nextUrl.pathname.startsWith('/admin')) {
    const token = cookies.get('token');
    if (!token) {
      const loginUrl = new URL('/auth/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
