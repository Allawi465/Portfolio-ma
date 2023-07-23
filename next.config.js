const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  output: {
    export: true, // Set the output type to "export"
  },
  rewrites() {
    return [
      {
        source: '/',
        destination: '/no',
      },
    ];
  },
});
