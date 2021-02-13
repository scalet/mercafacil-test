'use strict';

var DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER, 
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      celular: {
        allowNull: false,
        type: DataTypes.STRING(13),
        unique: true,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('contacts');
  }
};
