'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('frequency', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      days_of_week: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.BOOLEAN)
      },
      custom_every: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      times_a_day: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hours_of_day: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.TIME)
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('frequency');
  }
};
