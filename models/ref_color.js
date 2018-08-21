'use strict';
module.exports = (sequelize, DataTypes) => {
  var ref_color = sequelize.define('ref_color', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    hexa: DataTypes.STRING,
    R: DataTypes.STRING,
    G: DataTypes.STRING,
    B: DataTypes.STRING
  }, {});
  ref_color.associate = function(models) {
    // associations can be defined here
  };
  return ref_color;
};