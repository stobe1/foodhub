angular.module('Foodhub').component('cart', {
    bindings: {
       'totalPrice': '=',
       'isFixed': '=',
       "confirmText": "=",
       "confirmUrl": "=",
       "cancelText": "=",
       "cancelUrl": "=",
       'listFoodOrders' : '='
    },

    template: require('./cart.html'),

    controller: function() {

    }
});
