const {merge} = require('webpack-merge');
const {ModuleFederationPlugin} = require('webpack').container;
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common.js');

const domain = process.env.PRODUCTION_DOMAIN; // Replace with your production URL

const prodConfig = {
  mode: 'production',
  output:{
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes:{
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson?.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig);