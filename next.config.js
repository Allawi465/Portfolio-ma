const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  rewrites() {
    return [
      {
        source: '/',
        destination: '/no',
      },
    ];
  },
});
