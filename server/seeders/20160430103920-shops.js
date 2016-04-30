'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = new Date();
    return queryInterface.bulkInsert('shops', [
      { 
        id: 1,
        name: "Пицца Темпо",
        site_url: "http://www.pizzatempo.by",
        logo_url: "http://www.pizzatempo.by/public/i/logo.png",
        description: "Основными принципами работы пиццерий «Пицца Темпо» являются высокое качество блюд, стильный и удобный интерьер, доступные цены.",
        delivery_price: null,
        min_order_price: 120000,
        min_free_delivery_price: null,
        delivery_time: "воскресенье — четверг: заказы принимаются с 10.00. до 22.00. пятница — суббота: заказы принимаются с 10.00. до 02.00. меню завтраков ежедневно: заказы принимаются с 10.00. до 12.00. меню обеденных комплексов: понедельник — пятница: с 12.00. до 16.00.",
        created_at: now,
        updated_at: now
      }, {
        id: 2,
        name: "Еда Бай",
        site_url: "http://www.eda.by/",
        logo_url: "http://www.eda.by/images/logotype.png",
        description: "Приветствуем Вас на сайте одной из самых крупных в Беларуси служб доставки еды и напитков EDA.BY! С 2007 года мы предлагаем Вам широкий ассортимент блюд и напитков с доставкой из кафе на дом 24 часа в сутки и 7 дней в неделю! Главные приоритеты для нас - это высокий стандарт качества блюд и обслуживания. В нашем меню представлены: пицца, суши, блюда европейской кухни, супы, салаты, холодные закуски, горячие блюда, буррито, десерты, а также напитки и многое другое.",
        delivery_price: null,
        min_order_price: 100000,
        min_free_delivery_price: null,
        delivery_time: "24 часа в сутки и 7 дней в неделю!",
        created_at: now,
        updated_at: now
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('shops', [{id: 1}, {id: 2}]);
  }
};
