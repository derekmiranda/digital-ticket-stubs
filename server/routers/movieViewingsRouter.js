const express = require('express')
const passport = require('passport')
const log = require('debug')('stubs:viewings:router')

const {
  makeJSONResponseMiddleware,
  formattedJSONResponse,
  setCORS
} = require('./utils')
const movieViewingsController = require('../controllers/movieViewingsController')

const router = express.Router()

router.use(setCORS)

// check if user authenticated
router.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).send()
  }

  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      log('JWT auth error:', info.message)
      return formattedJSONResponse(res.status(401), {
        error: (info && info.message) || 'Unauthorized'
      })
    }

    // store user ref for viewing methods to use
    req.user = user
    next()
  })(req, res, next)
})

router.get('/', (req, res, next) => {
  const middleware = makeJSONResponseMiddleware(
    movieViewingsController.getMovieViewings,
    req.user.id
  )
  return middleware(req, res, next)
})

router.post('/', (req, res, next) => {
  const movieViewing = req.body
  const middleware = makeJSONResponseMiddleware(
    movieViewingsController.addMovieViewing,
    movieViewing,
    req.user.id
  )
  return middleware(req, res, next)
})

router.patch('/', (req, res, next) => {
  const movieViewings = req.body
  const middleware = makeJSONResponseMiddleware(
    movieViewingsController.updateMovieViewings,
    movieViewings
  )
  return middleware(req, res, next)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  const middleware = makeJSONResponseMiddleware(
    movieViewingsController.removeMovieViewing,
    id
  )
  return middleware(req, res, next)
})

module.exports = router
