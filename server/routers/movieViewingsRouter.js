const express = require('express');
const passport = require('passport');
const log = require('debug')('stubs:viewings:router')

const { makeJSONResponseMiddleware, setCORS } = require('./utils');
const movieViewingsController = require('../controllers/movieViewingsController');

const router = express.Router();

// check if user authenticated
router.use(passport.use('jwt', {
  session: false
}))

router.use(setCORS)

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