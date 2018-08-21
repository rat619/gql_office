//sequelize model:create --attributes "number:string name:string siret:integer" --name Provider
//sequelize db:migrate

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    number: DataTypes.STRING,
    name: DataTypes.STRING,
    siret: DataTypes.INTEGER
  }, {});
  Provider.associate = function(models) {
    // associations can be defined here
  };
  return Provider;
};