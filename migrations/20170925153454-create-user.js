'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        set(val) {
          this.setDataValue('username', val.toLowerCase());
        }
      },
      passHash: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          origPasswordWithinLen: origPw => {
            if (origPw.length < 8) {
              throw new Error('Password too short');
            } else if (origPw.length > 160) {
              throw new Error('Password too long');
            }
          },
        },
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        set(val) {
          this.setDataValue('email', val.toLowerCase());
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};