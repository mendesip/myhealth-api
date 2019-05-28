'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('patient_monitoring', [
      {
        patient_id: "123123412341234",
        ncd_id: 0,
        frequency_id: 0
      },
      {
        patient_id: "123123412341234",
        ncd_id: 2,
        frequency_id: 100
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patient_monitoring', null, {});
  }
};
