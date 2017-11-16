const express = require('express');

const { makeJSONResponseMiddleware } = require('./utils');
const movieViewingsController = require('../controllers/movieViewingsController');

const movieViewingsRouter = express.Router();

// TODO: stop making middleware dynamically on requests

movieViewingsRouter.get('/', makeJSONResponseMiddleware(movieViewingsController.getMovieViewings));

movieViewingsRouter.post('/', (req, res, next) => {
  const { movieViewing } = req.body;
  const middleware = makeJSONResponseMiddleware(movieViewingsController.addMovieViewing, movieViewing);
  return middleware(req, res, next);
});

movieViewingsRouter.patch('/', (req, res, next) => {
  const { movieViewings } = req.body;
  const middleware = makeJSONResponseMiddleware(movieViewingsController.updateMovieViewings, movieViewings);
  return middleware(req, res, next);
});

movieViewingsRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const middleware = makeJSONResponseMiddleware(movieViewingsController.removeMovieViewing, id);
  return middleware(req, res, next);
});

module.exports = movieViewingsRouter;