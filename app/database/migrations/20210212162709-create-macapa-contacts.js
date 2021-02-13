'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contacts', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER, 
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      celular: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
    });
  },

  down: async (queryInterface) => queryInterface.dropTable('contacts')
};
