'use strict';
module.exports = (sequelize, DataTypes) => {
  var permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  permission.associate = function(models) {
    // associations can be defined here
  };
  return permission;
};