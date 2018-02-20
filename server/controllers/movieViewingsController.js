const db = require('../../models')

const movieViewingsController = {}
const MovieViewing = db.MovieViewing

movieViewingsController.getMovieViewings = UserId => {
  return MovieViewing.findAll({ where: { UserId }, order: ['id'] })
}

movieViewingsController.addMovieViewing = (movieViewing, UserId) => {
  const viewingWithUserId = Object.assign({}, movieViewing, { UserId })
  return MovieViewing.create(viewingWithUserId)
}

movieViewingsController.updateMovieViewings = movieViewings => {
  const updatePromises = movieViewings.map(movieViewing =>
    movieViewingsController.updateMovieViewing(movieViewing)
  )
  return Promise.all(updatePromises)
}

movieViewingsController.updateMovieViewing = movieViewing => {
  return MovieViewing.update(movieViewing, {
    where: { id: movieViewing.id }
  })
}

movieViewingsController.removeMovieViewing = id => {
  return MovieViewing.destroy({
    where: { id }
  })
}

module.exports = movieViewingsController
