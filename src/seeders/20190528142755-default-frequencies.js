'use strict';

let hour2 = new Date(2019,1,1,8,0,0);
let hour3 = new Date(2019,1,1,12,0,0);
let hour4 = new Date(2019,1,1,16,0,0);

let array1 = [hour3];
let array2 = [hour2, hour3, hour4];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('frequency', [
            {
                id: 0,
                type: 0,
                days_of_week: '{true, null, null, null, null, null, null, null}',
                custom_every: 1,
                times_a_day: 1,
                hours_of_day: '{"12:00:00"}',
                start_date: '2019-01-01T19:41:05.874Z'
            },
            {
                id: 100,
                type: 0,
                days_of_week: '{true, null, null, null, null, null, null, null}',
                custom_every: 1,
                times_a_day: 3,
                hours_of_day: '{"08:00:00", "12:00:00", "16:00:00"}',
                start_date: '2019-01-01T19:41:05.874Z'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('frequency', null, {});
    }
};
