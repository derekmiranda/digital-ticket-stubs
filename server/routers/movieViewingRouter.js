const express = require('express');
const movieViewingsController = require('../controllers/movieViewingsController');

const movieViewingsRouter = express.Router();

const errorResponse = ({ res, err, statusCode }) => res.status(statusCode).json(err);
const JSONFormat = data => JSON.stringify(data, null, 4);

const formattedJSONResponse = (res, data) => (
  res
    .header('Content-Type', 'application/json')
    .end(JSONFormat(data))
);

const makeControllerMiddleware = (controllerPromiseFn, ...controllerFnArgs) => {
  return (req, res) => (
    controllerPromiseFn(...controllerFnArgs)
      .then(result => formattedJSONResponse(res, result))
      // 422 - mainly for incompatible data but need to account for other errors
      .catch(err => errorResponse({ res, err, statusCode: 422 }))
  )
}

movieViewingsRouter.get('/', makeControllerMiddleware(movieViewingsController.getMovieViewings));

movieViewingsRouter.post('/', (req, res, next) => {
  const { movieViewing } = req.body;
  const middleware = makeControllerMiddleware(movieViewingsController.addMovieViewing, movieViewing);
  return middleware(req, res, next);
});

movieViewingsRouter.patch('/', (req, res, next) => {
  const { movieViewings } = req.body;
  const middleware = makeControllerMiddleware(movieViewingsController.updateMovieViewings, movieViewings);
  return middleware(req, res, next);
});

movieViewingsRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const middleware = makeControllerMiddleware(movieViewingsController.removeMovieViewing, id);
  return middleware(req, res, next);
});

module.exports = movieViewingsRouter;