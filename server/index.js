// load mode-specific env vars
require('dotenv').config({
  path: `./config/.${process.env.NODE_ENV}.env`
})

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local')

const { verifyLogin, verifyJwt } = require('./passport/verify')
const searchRouter = require('./routers/searchRouter')
const viewingsRouter = require('./routers/movieViewingsRouter')
const usersRouter = require('./routers/usersRouter')
const { User } = require('../models')


let port = process.env.PORT || 3000
const { JWT_SECRET } = process.env
const app = express()

// Passport config
passport.use(
  'login',
  new LocalStrategy(
    {
      secret: JWT_SECRET,
      passwordField: 'passHash'
    },
    verifyLogin
  )
)

passport.use(
  new JwtStrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    verifyJwt
  )
)

// parse POST reqs
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// log requests
app.use(morgan('tiny'))

// Passport init
app.use(passport.initialize())

// Response Headers
app.use((req, res, next) => {
  res.header({
    // CORS
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Accepts'
  })
  next()
})

// Webpack Dev
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const config = require('../webpack.config')
  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))
}

app.use(express.static('public'))
app.use(express.static('dist'))
app.use('/api/viewings', viewingsRouter)
app.use('/api/search', searchRouter)
app.use('/api/users', usersRouter)

// redirect to index
app.get(['/', '/register', '/login'], (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../views/index.html'))
})

app.get('*', (req, res) => res.status(302).redirect('/'))

function startListening(app, port) {
  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })

  server.on('error', err => {
    if (err.code !== 'EADDRINUSE') throw err
    startListening(app, port + 1)
  })

  return server
}

startListening(app, port)

module.exports = app
