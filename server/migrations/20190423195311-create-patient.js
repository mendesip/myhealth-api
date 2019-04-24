'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient', {
      sus_number: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      user_id:{
        references: {
          model: 'user',
          key: 'id',
          as: 'user_id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date_of_birth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      gender: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      mothers_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      place_of_birth: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thoroughfare: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      neighborhood: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patient');
  }
};
