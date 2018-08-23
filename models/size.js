'use strict';
module.exports = (sequelize, DataTypes) => {
  var size = sequelize.define('size', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  size.associate = function(models) {
    // associations can be defined here
  };
  return size;
};