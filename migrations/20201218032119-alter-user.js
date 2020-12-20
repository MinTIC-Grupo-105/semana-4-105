//archivo de migrAcion para el nuvo item ROL
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Usuarios', 'rol', {
        type: Sequelize.STRING,
        
    });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('Usuarios');
  }
};