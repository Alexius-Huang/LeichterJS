var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './lib/leichter.js',
  output: {
    path: path.resolve(__dirname, 'build', 'js'),
    filename: 'leichter.js',
    libraryTarget: 'var',
    library: 'Leichter'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};