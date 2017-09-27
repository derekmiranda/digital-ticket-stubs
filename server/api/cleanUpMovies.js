const pick = require('lodash/pick');

module.exports = function cleanUpMovies(movies) {
  return movies.results.map(movie => pick(movie, [
    'title',
    'poster_path',
    'backdrop_path',
    'overview'
  ]))
}