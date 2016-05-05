'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = new Date();
    return queryInterface.bulkInsert('food_categories', [
      { 
        id: 1,
        name: "Пицца",
        shop_id: 1,
        created_at: now,
        updated_at: now
      }, {
        id: 2,
        name: "Супы",
        shop_id: 1,
        created_at: now,
        updated_at: now
      }, {
        id: 3,
        name: "Пицца",
        shop_id: 2,
        created_at: now,
        updated_at: now
      }, {
        id: 4,
        name: "Супы",
        shop_id: 2,
        created_at: now,
        updated_at: now        
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('food_categories', [{id: 1}, {id: 2}, {id: 3}, {id: 4}]);
  }
};
