const express = require('express')
const passport = require('passport')
const log = require('debug')('stubs:users:router')

const usersController = require('../controllers/usersController')
const { createToken } = require('../tokens')
const { formattedJSONResponse, setCORS } = require('./utils')

const { JWT_SECRET, JWT_EXPIRY, APP_SERVER_ORIGIN } = process.env
const router = express.Router()

router.use(setCORS)
router.post('/check', async (req, res, next) => {
  const user = req.body
  const errors = await usersController.checkUser(user)
  return formattedJSONResponse(res.status(422), errors)
})

router.post('/login', (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    if (err) return next(err)
    if (!user) {
      return formattedJSONResponse(res.status(401), {
        error: (info && info.message) || 'Login failure'
      })
    }
    const token = await createToken({ user, host: req.hostname })
    return formattedJSONResponse(res.status(200), { access_token: token })
  })
})

router.post('/register', async (req, res, next) => {
  try {
    const user = req.body
    const result = await usersController.createUser(user)
    const token = await createToken({ user: result.data, host: req.hostname })

    switch (result.error) {
      case 'database':
        return formattedJSONResponse(res.status(422), result)
      case 'server':
        throw result
      default:
        return formattedJSONResponse(
          res.status(201).set({
            Location: `${req.protocol}//:${req.hostname}/api/viewings`
          }),
          {
            access_token: token
          }
        )
    }
  } catch (err) {
    throw err
  }
})

module.exports = router
