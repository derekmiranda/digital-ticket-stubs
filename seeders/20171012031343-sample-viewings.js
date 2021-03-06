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
    watchtime: 'Thu Oct 05 2017 00:00:00 (PDT)',
  },
  {
    UserId: 1,
    title: 'Toe Story 2',
    venue: 'AMC 16',
    watchtime: 'Thu Oct 05 2017 00:00:00 (PDT)',
  },
  {
    UserId: 1,
    title: 'Toe Story 3',
    venue: 'AMC 16',
    watchtime: 'Thu Oct 05 2017 00:00:00 (PDT)',
  },
])

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('MovieViewings', records);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('MovieViewings', {
      UserId: {
        [Sequelize.Op.between]: [1, 3],
      }
    })
  }
};
