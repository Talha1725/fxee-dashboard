import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Get token from cookies or headers
  const token = request.cookies.get('token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '')
  
  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/about',
    '/contact',
    '/how-it-works',
    '/community',
    '/challenge-support',
    '/signin',
    '/signup',
    '/forgot-password',
    '/reset-password',
    '/verify-email',
    '/thanks'
  ]
  
  // Auth routes (signin, signup, etc.)
  const authRoutes = ['/signin', '/signup', '/forgot-password', '/reset-password', '/verify-email']
  
  // Dashboard routes that require authentication
  const dashboardRoutes = [
    '/dashboard',
    '/home',
    '/ai-engine',
    '/copy-trading',
    '/performance-history',
    '/trades',
    '/wallet',
    '/settings',
    '/support',
    '/tutorial'
  ]

  
  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  
  // Check if the current path is a dashboard route
  const isDashboardRoute = dashboardRoutes.some(route => pathname.startsWith(route))
  
  // If user is not authenticated and trying to access dashboard routes
  if (!token && isDashboardRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/signin'
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }
  
  // If user is authenticated and trying to access auth routes
  if (token && isAuthRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }
  
  // Continue with the request
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.).*)',
  ],
}