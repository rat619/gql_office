'use strict';
module.exports = (sequelize, DataTypes) => {
  var season = sequelize.define('season', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    startdate: DataTypes.DATE,
    enddate: DataTypes.DATE
  }, {});
  season.associate = function(models) {
    // associations can be defined here
  };
  return season;
};