const pick = require('lodash/pick');

module.exports = function cleanUpMovies(moviesJson) {
  return Object.assign(moviesJson, {
    results: moviesJson.results.map(movie => pick(movie, [
      'title',
      'poster_path',
      'backdrop_path',
      'overview'
    ]))
  })
}