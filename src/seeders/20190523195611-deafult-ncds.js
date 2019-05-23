'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('ncd', [
            {id: 0, type: "Arterial Hypertension"},
            {id: 1, type: "Coronary Artery Disease"},
            {id: 2, type: "Diabetes"},
            {id: 3, type: "Obesity"},
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ncd', null, {});
    }
};
