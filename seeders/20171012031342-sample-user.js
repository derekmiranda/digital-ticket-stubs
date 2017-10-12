'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 1,
        username: 'sample',
        passHash: 'sampleeeee',
        firstName: 'Sample',
        lastName: 'McSampleton',
        email: 'sampleeeeeeezzzzzzzzz@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
      .catch(err => { console.error(err) })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      id: 1,
    })
  }
};
