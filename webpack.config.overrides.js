const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config) {
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [{
      from: 'src/data/**/*.json',
      to: 'dist',
    }],
  }));

  return config;
};
