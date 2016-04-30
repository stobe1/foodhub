'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = new Date();
    return queryInterface.bulkInsert('foods', [
      { 
        id: 1,
        name: "Пицца Охотницья",
        description: "Состав: томатный соус, сыр Моцарелла, лук, шампиньоны, говядина, приправа Тако, соус Сальса, перец чили, чесночное масло, приправа к пицце",
        image_url: "http://terrapizza.by/components/catalog/load_files/original/718.jpg",
        price: 120000,
        shop_id: 1,
        category_id: 1,
        created_at: now,
        updated_at: now
      }, {
        id: 2,
        name: "Суп-крем из порея с чипсами бекона",
        description: "Состав: Лук порей, картофель, сливки, молоко, вино белое, бекон, руккола",
        image_url: "http://www.eda.by/data/newfiles/1442784752_55304917.jpg",
        price: 80000,
        shop_id: 2,
        category_id: 2,
        created_at: now,
        updated_at: now
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('foods', [{id: 1}, {id: 2}]);
  }
};
