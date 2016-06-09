var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config.base')

// add good price/perf source maps
config.devtool = 'cheap-module-eval-source-map'

// resolve window.fetch polyfill
config.resolve.alias = { fetch: 'whatwg-fetch' }

// inject webpack-hot-middleware entrypoint
config.entry.unshift(path.join(config.resolveLoader.root, 'webpack-hot-middleware/client.js'))

// development:hot asset virtual path
config.output.publicPath = '/static/'

// development:hot plugins
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.ProvidePlugin({
    'Promose': 'exports?global.Promise!es6-promise',
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development:hot')
    }
  })
]

module.exports = config
