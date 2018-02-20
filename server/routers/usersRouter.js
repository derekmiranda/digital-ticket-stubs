const express = require('express')
const passport = require('passport')
const log = require('debug')('stubs:users:router')

const usersController = require('../controllers/usersController')
const { createToken } = require('../tokens')
const { formattedJSONResponse, setCORS } = require('./utils')

const { APP_SERVER_ORIGIN } = process.env
const router = express.Router()

router.use(setCORS)
router.post('/check', async (req, res, next) => {
  const user = req.body
  const errors = await usersController.checkUser(user)
  return formattedJSONResponse(res.status(422), errors)
})

router.post('/login', passport.authenticate('login'), (req, res) => {
  log('Session ID:', req.sessionID)  
  log('User:', req.user)  
  return res.send('User logged in')
})

router.post('/register', passport.authenticate('register'), (req, res) => {
  return res.status(201).send('User created')
})

module.exports = router
