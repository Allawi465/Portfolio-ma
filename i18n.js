module.exports = {
  locales: ['no', 'en'],
  defaultLocale: 'no',
  pages: {
    '*': ['common'],
    '/': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
};