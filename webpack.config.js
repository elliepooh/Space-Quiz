'use strict';
let path = require('path');

module.exports = {
  context: __dirname + '/src',

  entry: './js/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
};
