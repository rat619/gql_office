'use strict';
module.exports = (sequelize, DataTypes) => {
  var Range = sequelize.define('Range', {
    name: DataTypes.STRING
  }, {});
  Range.associate = function(models) {
    // associations can be defined here
  };
  return Range;
};