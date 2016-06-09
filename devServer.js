var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev-hot')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/favicon.ico', function (req, res) {
  res.sendStatus(200);
})

app.all('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8888, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://0.0.0.0:8888');
})
