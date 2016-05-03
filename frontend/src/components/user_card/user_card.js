'use strict';

angular.module('Foodhub').component('userCard', {
  bindings: {
    'name': '<',
    'price': '<',
    'listFoodOrders': '=',
    'isPay' : '=',
    'isAdmin' : '<',
    'onDelete' : '&'
  },

  template: require('./user_card.html'),

  controller: function userCardController() {
    this.clickClose = function clickClose() {
      this.onDelete()
    }
  }
});
