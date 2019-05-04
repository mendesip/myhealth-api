'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('frequency', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      days_of_week: {
        type: Sequelize.ARRAY(Sequelize.BOOLEAN),
        allowNull: false,
      },
      custom_every: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      times_a_day: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hours_of_day: {
        type: Sequelize.ARRAY(Sequelize.TIME),
        allowNull: false
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('frequency');
  }
};
