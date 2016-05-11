'use strict';

var PizzaTempo = require('./PizzaTempo');
var db = require('../db');
var Food = db.import('../models/Food');
var FoodCategory = db.import('../models/FoodCategory');


var tempo = new PizzaTempo();
var tempoProducts = tempo.getProducts();

tempoProducts.then((res) => {
  var category = {};
  res = res.map((item) => {
    category[item.category] = true;

    var categoryId;
    var id = 1;

    for(var key in category) {
      if(item.category == key) {
        categoryId = id;
      } else {
        id++;
      }
    }

    return {
      name: item.name,
      description: item.description,
      imageUrl: item.imageUrl,
      price: item.price,
      shopId: 1,
      categoryId: categoryId,
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
    return FoodCategory.bulkCreate(category, {transaction: t}).then(() => {
      return FoodCategory.findAll();
    }).then((categories) => {
      console.log(categories);
    });
  });

});
