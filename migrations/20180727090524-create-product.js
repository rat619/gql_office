'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      provider: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    range: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    coefficient: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    Code_VAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    selling_price: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    purchasing_price: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    tax_free_rate: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    CUMP: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    weight: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    color: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    group: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    season: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    label: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    first_delivery: {
      type: Sequelize.DATE,
      allowNull: true
    },
    creation_date: {
      type: Sequelize.DATE,
      allowNull: true
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};