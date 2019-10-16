// next.config.js
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    }
  })
)
