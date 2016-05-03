const angular = require('angular');
const templateHtml = require('./user_card.html');

angular.module('Foodhub').component('userCard', {
  bindings: {
    name: '<',
    listFoodOrders: '=',
    isPay: '=',
    isAdmin: '<',
    isCanChangeOrders: '<',
    onDeleteUser: '&',
    onDeleteOrder: '&',
  },

  template: templateHtml,

  controller: function userCardController() {
    this.clickClose = function clickClose() {
      this.onDeleteUser();
    };

    this.getTotalPrice = function getTotalPrice() {
      let price = 0;

      function getOrderTotalPrice(foodOrder) {
        price += foodOrder.price * foodOrder.foodCounter;
      }

      this.listFoodOrders.forEach(getOrderTotalPrice);

      return price;
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
