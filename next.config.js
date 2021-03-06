const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css')

const next_config = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  },
}

module.exports = withCSS({...next_config});