const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextTranslate(nextConfig);
