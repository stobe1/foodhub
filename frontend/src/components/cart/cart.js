const angular = require('angular');
const templateHtml = require('./cart.html');

angular.module('Foodhub').component('cart', {
    bindings: {
      isFixed: '<',
      confirmText: '<',
      confirmUrl: '<',
      onConfirm: '&',
      cancelText: '<',
      cancelUrl: '<',
      onCancel: '&',
      canChangeOrders: '<',
      listFoodOrders : '=',
      onDeleteOrder: '&',
    },

    template: templateHtml,

    controller: function cartController() {

      this.getTotalPrice = function () {
        let price = 0;

        function getOrderTotalPrice(foodOrder) {
          price += foodOrder.price * foodOrder.foodCounter;
        }

        this.listFoodOrders.forEach(getOrderTotalPrice);

        return price;
      };

      this.clickCancelBtn = function () {
        this.onCancel();
      };

      this.clickConfirmBtn = function () {
        this.onConfirm();
      };

      this.deleteOrder = function (orderForDelete) {
        var index = this.listFoodOrders.indexOf(orderForDelete);

        if (index !== -1) {
          this.listFoodOrders.splice(index, 1);
          this.onDeleteOrder();
        }
      };
    },
});
