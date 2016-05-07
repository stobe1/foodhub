var errors = require('../errors/errors');
var models = require('../models/models');

var shortQueryOptions = {
  attributes: { 
    exclude: ['createdAt', 'updatedAt'] 
  }
}

var fullQueryOptions = {
  attributes: { 
    exclude: ['createdAt', 'updatedAt']
  },
  include: {
    model: models.FoodCategory,
    as: 'categories',
    attributes: ['id', 'name'],
    include: {
      model: models.Food,
      as: 'foods',
      attributes: ['id', 'name', 'description', 'imageUrl', 'price']
    }
  }
}

exports.index = function(request, response, next) {
  models.Shop.all(shortQueryOptions).then(function(shops) {
    response.status(200).json({ shops: shops });
  });
};

exports.show = function(request, response, next) {
  models.Shop.findById(request.params.id, fullQueryOptions).then(function(shop) {
    if (shop) {
      response.status(200).json(shop);
    } else {
      return next(new errors.notFound('Shop not found'));
    }
  });
};
