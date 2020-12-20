//archivo de migrAcion para el nuvo item ESTADO
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'estado', {
        type: Sequelize.INTEGER,
        defaultValue: 1
    });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('users');
  }
};