'use strict';
module.exports = (sequelize, DataTypes) => {
  var group = sequelize.define('group', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  group.associate = function(models) {
    // associations can be defined here
  };
  return group;
};