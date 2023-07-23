import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['no', 'en'],
  defaultLocale: 'no',
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
