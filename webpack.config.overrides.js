const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config) {
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [{
      from: 'src/data/**/*.json',
      to: 'dist',
    }],

    resolve: {
      alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc'
      },
    }));

  return config;
};

module.exports = {
  //...
};
