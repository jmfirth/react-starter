var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('./webpack.config.base')

// TODO: remove source maps from production build
config.devtool = 'source-map'

// production intended relative path
config.output.publicPath = './'

// production plugins
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }),
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }),
  new HtmlWebpackPlugin({
    title: 'React Starter',
    template: 'index.template.html'
  })
]

module.exports = config
