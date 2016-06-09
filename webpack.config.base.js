var path = require('path')

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'wwwroot'),
    modules: path.join(__dirname, 'node_modules')
}

module.exports = {
  resolve: {
    root: PATHS.app,
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    root: PATHS.modules
  },
  entry: [
    'babel-polyfill',
    path.join(PATHS.app, 'index.js')
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: PATHS.modules,
        include: PATHS.app,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [PATHS.modules, PATHS.app]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.eot(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
      },
      {
        test: /\.woff(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader?limit=100000&mimetype=image/svg+xml'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
