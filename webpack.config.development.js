var webpack = require('webpack');
var config = require('./webpack.config.base');

config.devtool = 'inline-source-map';

config.devServer = {
  host: '0.0.0.0',
  hot: true
};

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

module.exports = config;
