'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient_monitor', {
      patient_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model: 'patient',
          key: 'sus_number'
        }
      },
      ncd_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'ncd',
          key: 'id'
        }
      },
      frequency_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'frequency',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patient_monitor');
  }
};
