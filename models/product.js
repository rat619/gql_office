'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    provider: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    range: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    coefficient: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Code_VAT: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    selling_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    purchasing_price: {
      type:DataTypes.DOUBLE,
      allowNull: true
    },
    tax_free_rate: {
      type:DataTypes.DOUBLE,
      allowNull: true
    },
    CUMP: {
      type:DataTypes.DOUBLE,
      allowNull: true
    },
    weight: {
      type:DataTypes.DOUBLE,
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    color: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    group: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    season: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    label: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    first_delivery: {
      type: DataTypes.DATE,
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};