'use strict';

var PizzaTempo = require('./PizzaTempo');
var db = require('../db');
var models = require('../models/models');
// var Food = db.import('../models/Food');
// var FoodCategory = db.import('../models/FoodCategory');


var tempo = new PizzaTempo();
var tempoProducts = tempo.getProducts();

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
      shopId: 1,
      externalFoodId: item.externalFoodId
    };
  });

  category = Object.keys(category).map((item) => {
    return {
      name: item,
      shopId: 1
    };
  });

  db.transaction((t) => {

    return models.FoodCategory.destroy({
      truncate: true,
      cascade: true,
      transaction: t
    }).then(() => {
      models.FoodCategory.bulkCreate(category, {
        transaction: t
      });
    }).then(() => {
      return models.FoodCategory.findAll({
        where: {
          shopId: 1
        },
        transaction: t
      });
    }).then((categories) => {
      res = res.map((item) => {
        categories.forEach((category) => {
          if (category.name == item.category) {
            item.categoryId = category.id;
          }
        });

        delete item.category;
        return item;
      });

      return res;

    }).then((products) => {
      models.Food.bulkCreate(products);
    });
  });

});
