const db = require('../../models');

const movieViewingsController = {};
const MovieViewing = db.MovieViewing;

movieViewingsController.getMovieViewings = (queryObj = {}) => {
  return MovieViewing.findAll({ where: queryObj, order: ['id'] });
}

movieViewingsController.addMovieViewing = (movieViewing) => {
  return MovieViewing.create(movieViewing);
}

movieViewingsController.updateMovieViewings = (movieViewings) => {
  const updatePromises = movieViewings.map(
    movieViewing => movieViewingsController.updateMovieViewing(movieViewing)
  );
  return Promise.all(updatePromises);
}

movieViewingsController.updateMovieViewing = (movieViewing) => {
  return MovieViewing.update(movieViewing, {
    where: { id: movieViewing.id },
  })
}

movieViewingsController.removeMovieViewing = (id) => {
  return MovieViewing.destroy({
    where: { id },
  })
}

module.exports = movieViewingsController;