const express = require('express');
const log = require('debug')('stubs:viewings:router')

const { makeJSONResponseMiddleware } = require('./utils');
const movieViewingsController = require('../controllers/movieViewingsController');

const router = express.Router();

// check if user authenticated
router.use((req, res, next) => {
  log(req.sessionID)
  if (!req.session.passport) {
    return res.status(401).send('Unauthorized')
  }
  next()
})

router.get('/', makeJSONResponseMiddleware(movieViewingsController.getMovieViewings));

router.post('/', (req, res, next) => {
  const movieViewing = req.body;
  const middleware = makeJSONResponseMiddleware(movieViewingsController.addMovieViewing, movieViewing);
  return middleware(req, res, next);
});

router.patch('/', (req, res, next) => {
  const movieViewings = req.body;
  const middleware = makeJSONResponseMiddleware(movieViewingsController.updateMovieViewings, movieViewings);
  return middleware(req, res, next);
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const middleware = makeJSONResponseMiddleware(movieViewingsController.removeMovieViewing, id);
  return middleware(req, res, next);
});

module.exports = router;