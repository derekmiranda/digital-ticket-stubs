const express = require('express')
const passport = require('passport')
const log = require('debug')('stubs:users:router')

const usersController = require('../controllers/usersController')
const { formattedJSONResponse } = require('./utils')

const { APP_SERVER_ORIGIN } = process.env
const router = express.Router()

// Response Headers
router.use((req, res, next) => {
  res.header({
    // CORS
    'Access-Control-Allow-Origin': APP_SERVER_ORIGIN,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Accepts'
  })
  next()
})

router.post('/check', async (req, res, next) => {
  const user = req.body
  const errors = await usersController.checkUser(user)
  return formattedJSONResponse(res.status(422), errors)
})

router.post('/login', passport.authenticate('login'), (req, res) => {
  log('User:', req.user)  
  return res.send('User logged in')
})

router.post('/register', passport.authenticate('register'), (req, res) => {
  return res.status(201).send('User created')
})

module.exports = router
