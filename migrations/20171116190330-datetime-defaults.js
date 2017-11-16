'use strict';

const datetimeAttrs = ['createdAt', 'updatedAt'];
module.exports = {
  up: function(queryInterface, Sequelize) {
    function addDefaultToDatetime(datetimeAttr) {
      queryInterface.changeColumn('Users', datetimeAttr, {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }) 

      queryInterface.changeColumn('MovieViewings', datetimeAttr, {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }) 
    }
    datetimeAttrs.forEach(addDefaultToDatetime);
  },
  down: function(queryInterface, Sequelize) {
    function resetDatetime(datetimeAttr) {
      queryInterface.changeColumn('Users', datetimeAttr, {
        allowNull: false,
        type: Sequelize.DATE,
      }) 

      queryInterface.changeColumn('MovieViewings', datetimeAttr, {
        allowNull: false,
        type: Sequelize.DATE,
      }) 
    }
    datetimeAttrs.forEach(resetDatetime);
  }
};