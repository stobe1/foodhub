var angular = require('angular');
var _ = require('lodash');

angular.module('Foodhub').component('cart', {
  bindings: {
    isFixed: '<',
    onConfirm: '&',
    order : '='
  },

  template: require('./cart.html'),

  controller: function cartController() {
    this.confirmText = "Подтвердить";
    this.cancelText = "Очистить корзину";

    this.getTotalPrice = function() {
      if (!this.order) return 0;
      this.order.price = _.sumBy(this.order.foodOrders, function(foodOrder) { return foodOrder.food.price * foodOrder.quantity });
      return this.order.price;
    };

    this.clickCancelBtn = function () {
      if (!this.order) return;
      this.order.foodOrders = [];
    };

    this.clickConfirmBtn = function () {
      if (!this.order) return;
      this.onConfirm()(this.order);
    };

    this.deleteOrder = function (index) {
      if (!this.order) return;
      this.order.foodOrders.splice(index, 1);
    }
  }
});
