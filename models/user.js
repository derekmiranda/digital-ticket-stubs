'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
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
        this.setDataValue('email', val.toLowerCase());
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Movie);
      }
    }
  });
  return User;
};
