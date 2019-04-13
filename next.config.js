const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const CompressionPlugin = require('compression-webpack-plugin');
const { parsed: localEnv } = require('dotenv').config();

const isProduction = () => process.env.NODE_ENV === 'production';
const isLocal = () => process.env.IS_LOCAL === 'true';

const webpack = require('webpack');

let options = {};

if (isProduction() && !isLocal()) {
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
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.js(\?.*)?$/i,
        })
      );
      // TODO: Enable this when lambdas are in Node 11.7 or later.
      // config.plugins.push(new CompressionPlugin({
      //   filename: '[path].br[query]',
      //   algorithm: 'brotliCompress',
      //   test: /\.(js|css|html|svg)$/,
      //   compressionOptions: { level: 11 },
      //   threshold: 10240,
      //   minRatio: 0.8,
      //   deleteOriginalAssets: false
      // }))

      return config;
    },
    ...options,
  }
);
