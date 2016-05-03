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

      this.getTotalPrice = function getTotalPrice() {
        let price = 0;

        function getOrderTotalPrice(foodOrder) {
          price += foodOrder.price * foodOrder.foodCounter;
        }

        this.listFoodOrders.forEach(getOrderTotalPrice);

        return price;
      };

      this.clickCancelBtn = function clickCancelBtn() {
        this.onCancel();
      };

      this.clickConfirmBtn = function clickConfirmBtn() {
        this.onConfirm();
      };

      this.deleteOrder = function deleteOrder(orderForDelete) {
        let indexDelete = -1;

        function searchOrder(foodOrder, i) {
          if (foodOrder === orderForDelete) {
            indexDelete = i;
          }
        }

        this.listFoodOrders.forEach(searchOrder);

        if (indexDelete > -1) {
          this.listFoodOrders.splice(indexDelete, 1);
          this.onDeleteOrder();
        }
      };
    },
});