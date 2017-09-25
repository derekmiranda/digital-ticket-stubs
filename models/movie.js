'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    venue: DataTypes.STRING,
    watchtime: DataTypes.DATETIME,
  }, {
    classMethods: {
      associate: function(models) {
        Movie.belongsTo(models.User, {
					onDelete: "CASCADE",
					foreignKey: {
						allowNull: false
					}
				});
      }
    }
  });
  return Movie;
};
