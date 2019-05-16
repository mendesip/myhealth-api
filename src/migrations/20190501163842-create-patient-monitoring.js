'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient_monitoring', {
      patient_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model: 'patient',
          key: 'sus_number'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patient_monitoring');
  }
};
