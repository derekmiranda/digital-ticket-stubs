'use strict';
module.exports = function (sequelize, DataTypes) {
  var MovieViewing = sequelize.define('MovieViewing', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    venue: DataTypes.STRING,
    watchtime: DataTypes.DATE,
    backdropPath: DataTypes.STRING,
    posterPath: DataTypes.STRING,
    picsUpdateTime: DataTypes.DATE,
  })

  MovieViewing.associate = function (models) {
    MovieViewing.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }
  
  return MovieViewing;
};