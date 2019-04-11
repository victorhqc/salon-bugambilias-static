const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { parsed: localEnv } = require('dotenv').config();

const isProduction = () => process.env.NODE_ENV === 'production';

const webpack = require('webpack');

let options = {};

if (isProduction()) {
  options = {
    target: 'serverless',
    assetPrefix: 'https://bugambilias-party.s3.amazonaws.com',
  };
}

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
    ...options,
  }
);
