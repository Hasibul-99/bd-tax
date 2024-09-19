import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'bn'],

  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // Disable auto-redirect from '/' to '/en'
  // localeDetection: false,
})

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(bn|en)/:path*']

  // Match only internationalized pathnames
  // matcher: [
  //   '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest|assets|js).*)',
  // ],

  matcher: [
    '/', // Root path for default English
    '/en/:path*', // English paths
    '/bn/:path*', // Bengali paths
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest|assets|js).*)',
  ],
}
