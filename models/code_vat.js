'use strict';
module.exports = (sequelize, DataTypes) => {
  var Code_VAT = sequelize.define('Code_VAT', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Code_VAT.associate = function(models) {
    // associations can be defined here
  };
  return Code_VAT;
};