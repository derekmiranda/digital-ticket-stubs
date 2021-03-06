const express = require('express');

const tmdbApi = require('../api/tmdbApi');
const { formattedJSONResponse } = require('./utils');

const router = express.Router();

router.get('/:movie', async (req, res) => {
  const { movie } = req.params;
  try {
    const foundMovies = await tmdbApi.searchForMovie(movie);
    return formattedJSONResponse(res, foundMovies);
  } catch (err) {
    throw err;
  }
});

module.exports = router;