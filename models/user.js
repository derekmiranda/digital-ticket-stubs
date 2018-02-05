'use strict';

const argon2 = require('argon2')
const sequelize = require('sequelize')

const { normalizeStr } = require('../utils/general')

function hashPassword(pw) {
  return argon2.hash(pw)
    .catch(err => { throw err })
}

function convertUserPassword(user, options) {
  return sequelize.Promise
    .resolve(hashPassword(user.passHash))
    .then((hash) => {
      user.setDataValue('passHash', hash)
      return user
    })
}

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: /^\w+/i,
        notEmpty: true,
      },
      set(val) {
        this.setDataValue('username', normalizeStr(val));
      }
    },
    passHash: {
      type: DataTypes.STRING,
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
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      set(val) {
        this.setDataValue('email', normalizeStr(val));
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Movie);
      }
    },
    hooks: {
      beforeCreate: convertUserPassword,
      beforeUpdate: convertUserPassword,
    }
  });
  return User;
};
