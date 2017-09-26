'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.renameTable('Movies', 'MovieViewings');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.renameTable('MovieViewings', 'Movies');
  }
};
