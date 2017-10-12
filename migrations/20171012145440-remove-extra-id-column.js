'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('MovieViewings', 'id')
      .then(_ => console.log('id column removed'))
      .catch(err => { throw err })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('MovieViewings', 'id', {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    })
    .then(_ => console.log('id column readded'))
    .catch(err => { throw err })
  }
};
