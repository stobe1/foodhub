exports.index = function(request, response) {
  response.status(200).json({shops: [
      {
        id: 1,
        name: 'ПиццаТемпо',
        siteUrl: 'http://pizzatempo.com',
        logoUrl: 'http://asdasdasd',
        description: 'Лучшая пицца в Минске',
        deliveryPrice: 50000,
        minOrderPrice: 200000,
        minFreeDeliveryPrice: 300000,
        deliveryTime: 'понедельник - пятница: 12:00 - 20:00, суббота - воскресенье: 12:00 - 02:00'
      }, {
        id: 2,
        name: 'Еда бай',
        siteUrl: 'http://eda.by',
        logoUrl: 'http://asdasdasd',
        description: 'Лучшая еда в Минске',
        deliveryPrice: 50000,
        minOrderPrice: 200000,
        minFreeDeliveryPrice: 300000,
        deliveryTime: 'Круглосуточно без выходных!'
      }
    ]});
};

exports.show = function(request, response) {
  response.send('Shops#show');
};
