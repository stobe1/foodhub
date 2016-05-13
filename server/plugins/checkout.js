'use strict';

var request = require('request');

function checkoutPizzaTempo(data) {
  var jar = request.jar();
  var address = data.user.address.split(',');
  var paymentType = data.user.payment_option ? 'card' : 'nal';

  request({
    method: 'GET',
    url: 'http://www.pizzatempo.by/menu',
    jar: jar
  }, function(error, response, html) {

    var promise = Promise.resolve();
    data.products.forEach((item) => {
      promise = promise.then(() => {
        if (data.category != 'Пицца') {
          return new Promise((res, rej) => {
            request({
              method: 'POST',
              url: 'http://www.pizzatempo.by/menu/cart/',
              jar: jar,
              headers: {
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Accept': '*/*',
                'Origin': 'http://www.pizzatempo.by',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,be;q=0.2'
              },
              form: {
                order_data: {
                  id: item.id,
                  count: item.count
                },
                type: 'product',
                rand: Math.random()
              }
            }, function(error, response, html) {
              res(response.statusCode);
            });
          });
        } else {
          return new Promise((res, rej) => {
            request({
              method: 'POST',
              url: 'http://www.pizzatempo.by/menu/cart/',
              jar: jar,
              headers: {
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Accept': '*/*',
                'Origin': 'http://www.pizzatempo.by',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,be;q=0.2'
              },
              form: {
                order_data: [{
                  id: item.id,
                  count: item.count
                }],
                type: 'pizza',
                rand: Math.random()
              }
            }, function(error, response, html) {
              res(response.statusCode);
            });
          });
        }
      });
    });

    promise.then((res) => {
      request({
        method: 'POST',
        url: 'http://www.pizzatempo.by/menu/order/',
        jar: jar,
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,be;q=0.2',
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Pragma': 'no-cache',
          'Upgrade-Insecure-Requests': 1
        },
        form: {
          table: 'cat_orders',
          phone: data.user.phone,
          email: data.user.email,
          fio: data.user.name,
          city: address[0],
          street: address[1],
          house: address[2],
          room: address[3],
          payment_type: paymentType,
          form_submit: 'Отправить'
        }
      }, function(error, response, html) {
        console.log(html);
      });
    }).then((res) => {
      request({
        url: 'http://www.pizzatempo.by/menu/cart/?ajax=1&action=GetCart',
        method: 'GET',
        jar: jar
      }, function(error, response, html) {

      });
    });
  });
}

var data = {
  shop: 'Пицца Темпо',
  user: {
    phone: '+375 29 111 11 11',
    email: 'a@a.ru',
    name: 'Olya',
    address: 'Минск, Независимости, 45, 34',
    payment_option: 0
  },
  products: [
    {
      id: 247,
      count: 2,
      category: 'Горячие блюда'
    },
    {
      id: 1220,
      count: 1,
      category: 'Ненн'
    }
  ]
};


checkoutPizzaTempo(data);
