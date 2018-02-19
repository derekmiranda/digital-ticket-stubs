const express = require('express')
const passport = require('passport')
const usersController = require('../controllers/usersController')
const { formattedJSONResponse } = require('./utils')

const { APP_SERVER_ORIGIN } = process.env
const usersRouter = express.Router()

// Response Headers
usersRouter.use((req, res, next) => {
  res.header({
    // CORS
    'Access-Control-Allow-Origin': APP_SERVER_ORIGIN,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Accepts'
  })
  next()
})

usersRouter.post('/check', async (req, res, next) => {
  const user = req.body
  const errors = await usersController.checkUser(user)
  return formattedJSONResponse(res.status(422), errors)
})

usersRouter.post('/login', passport.authenticate('login'), (req, res) => {
  return res.send('User logged in')
})

usersRouter.post('/register', passport.authenticate('register'), (req, res) => {
  return res.status(201).send('User created')
})

module.exports = usersRouter
