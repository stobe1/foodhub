'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = new Date();
    return queryInterface.bulkInsert('food_categories', [
      { 
        id: 1,
        name: "Пицца",
        created_at: now,
        updated_at: now
      }, {
        id: 2,
        name: "Супы",
        created_at: now,
        updated_at: now
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('food_categories', [{id: 1}, {id: 2}]);
  }
};
