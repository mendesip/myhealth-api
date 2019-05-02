'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('register', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ncd_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
      observation: {
        type: Sequelize.STRING
      },
      systolic: {
        type: Sequelize.INTEGER
      },
      diastolic: {
        type: Sequelize.INTEGER
      },
      heart_beats: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.FLOAT
      },
      glycemic_rate: {
        type: Sequelize.FLOAT
      },
      bodyfat: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('register');
  }
};
