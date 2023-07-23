import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['no', 'en'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'no',
  localePrefix: 'always',
  domains: [
    {
      domain: 'http://localhost:3000',
      defaultLocale: 'no',
      // Optionally restrict the locales managed by this domain. If this
      // domain receives requests for another locale (e.g. us.example.com/fr),
      // then the middleware will redirect to a domain that supports it.
      locales: ['no'],
    },
    {
      domain: 'http://localhost:3000',
      defaultLocale: 'no',
      // If there are no `locales` specified on a domain,
      // all global locales will be supported here.
    },
  ],
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
