'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('patient', [
      {
        sus_number: "123123412341234",
        user_id: 0,
        name: "Ivo Mendes",
        date_of_birth: "1997-03-03T00:00:00.000Z",
        gender: "M",
        mothers_name: "Silvane Mendes",
        place_of_birth: "Belém/PA",
        postcode: "13566-620",
        thoroughfare: "Rua Peru",
        number: "48",
        complement: null,
        neighborhood: "Vila Brasília",
        city: "São Carlos",
        state: "SP",
  }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patient', null, {});
  }
};
