'use strict';

const recordsWithDateCols = records => (
  records.map(record => Object.assign(record, {
    createdAt: new Date(),
    updatedAt: new Date()
  }))
)

const records = recordsWithDateCols([
  {
    UserId: 1,
    title: 'Toe Story',
    venue: 'AMC 16',
  },
  {
    UserId: 2,
    title: 'Toe Story 2',
    venue: 'AMC 16',
  },
  {
    UserId: 3,
    title: 'Toe Story 2',
    title: 'Toe Story 3',
    venue: 'AMC 16',
  },
])

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('MovieViewings', records);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('MovieViewings', {
      [Sequelize.Op.like]: 'Toe%',
    })
  }
};
