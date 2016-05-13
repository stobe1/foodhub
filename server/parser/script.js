'use strict';

var PizzaTempo = require('./PizzaTempo');
var db = require('../db');
var models = require('../models/models');
var CronJob = require('cron').CronJob;

var parse = new CronJob('00 00 00 * * *', function() {
  var tempo = new PizzaTempo();
  var tempoProducts = tempo.getProducts();

  models.Shop.findOne({
    where: {
      name: 'Пицца Темпо'
    }
  }).then((shop) => {
    var shopId = shop.id;
    tempoProducts.then((res) => {
      var category = {};
      res = res.map((item) => {
        category[item.category] = true;

        return {
          name: item.name,
          description: item.description,
          imageUrl: item.imageUrl,
          price: item.price,
          category: item.category,
          externalFoodId: item.externalFoodId
        };
      });

      category = Object.keys(category).map((item) => {
        return {
          name: item,
          shopId: shopId
        };
      });

      db.transaction((t) => {

        return models.FoodCategory.destroy({
          where: {},
          transaction: t
        }).then(() => {
          return models.Food.destroy({
            where: {},
            transaction: t
          });
        }).then(() => {
          return models.FoodCategory.bulkCreate(category, {
            transaction: t
          });
        }).then(() => {
          return models.FoodCategory.findAll({
            where: {
              shopId: shopId
            },
            transaction: t
          });
        }).then((categories) => {
          res = res.map((item) => {
            categories.forEach((category) => {
              if (category.name == item.category) {
                item.categoryId = category.id;
                item.shopId = category.shopId;
              }
            });
            delete item.category;
            return item;
          });
          return models.Food.bulkCreate(res, {
            transaction: t
          });
        });
      });
    });
  });
}, function () {
  console.log('Parsing done!');
},
  true,
  null,
  null,
  true
);
