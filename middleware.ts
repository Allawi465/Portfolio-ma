import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // All locales across all domains
  locales: ['no', 'en'],

  // Used when no domain matches (e.g. on localhost)
  defaultLocale: 'no',

  domains: [
    {
      domain: 'https://allawi465.github.io/Portfolio-ma/',
      defaultLocale: 'no',
      // Optionally restrict the locales managed by this domain. If this
      // domain receives requests for another locale (e.g. us.example.com/fr),
      // then the middleware will redirect to a domain that supports it.
      locales: ['no'],
    },
    {
      domain: 'https://allawi465.github.io/Portfolio-ma/',
      defaultLocale: 'no',
      // If there are no `locales` specified on a domain,
      // all global locales will be supported here.
    },
  ],
});
