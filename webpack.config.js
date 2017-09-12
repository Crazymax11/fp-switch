var webpack = require('webpack');
var path = require('path');
var libraryName = 'fp-switch';
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [

  ]
};
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new UglifyJSPlugin({ minimize: true }));
    config.output.filename = libraryName + '.min.js';
}

module.exports = config;