const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
};

module.exports = nextTranslate(nextConfig);
