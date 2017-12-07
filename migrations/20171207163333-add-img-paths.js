'use strict';

const getNewColumns = (Sequelize) => [
  {
    key: 'backdropPath',
    type: Sequelize.STRING,
  },
  {
    key: 'posterPath',
    type: Sequelize.STRING,
  },
  {
    key: 'picsUpdateTime',
    type: Sequelize.DATE,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    getNewColumns(Sequelize).forEach((newCol) => {
      const { key, type } = newCol;
      queryInterface.addColumn('MovieViewings', key, {
        type,
      })
        .then(() => console.log(`Column "${key}" added`))
    })
  },

  down: (queryInterface, Sequelize) => {
    getNewColumns(Sequelize).forEach((newCol) => {
      const { key } = newCol;
      queryInterface.removeColumn('MovieViewings', key)
        .then(() => console.log(`Column "${key}" removed`))
    })
  }
};
