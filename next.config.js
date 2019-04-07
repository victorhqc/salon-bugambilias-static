const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
    // your other plugins here
  ],
  {
    webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

      return config;
    },
    target: 'serverless',
    assetPrefix: 'https://salon-bugambilias.s3.amazonaws.com',
  }
);
