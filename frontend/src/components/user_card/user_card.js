'use strict';

angular.module('Foodhub').component('userCard', {
    bindings: {
       'name': '=',
       'price': '=',
       'listFoodOrders': '=',
       'isPay' : '=',
       'isFooter' : '=',
    },

    template: require('./user_card.html'),

    controller: function() {

    }
});