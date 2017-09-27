const express = require('express');

const tmdbApi = require('../api/tmdbApi');
const { formattedJSONResponse } = require('./utils');

const searchRouter = express.Router();
searchRouter.get('/', async (req, res) => {
  const { movie } = req.query;
  try {
    const foundMovies = await tmdbApi.searchForMovie(movie);
    return formattedJSONResponse(res, foundMovies);
  } catch (err) {
    throw err;
  }
});

module.exports = searchRouter;