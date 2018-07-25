const express = require('express')
const { Nuxt, Builder } = require('nuxt')
var bodyParser = require('body-parser');
require("dotenv").config();

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const api = require('./routes/api')

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// koneksi mongo
let mongoose = require('mongoose');
let mongoUrl = 'mongodb://localhost:27017/akufls'

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('mongo connected', mongoUrl)
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// route backend
app.use('/api/auth', api)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    // FIXME: ini nyalakan lagi, buat garap frontend
    // await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
