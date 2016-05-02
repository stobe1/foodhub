angular.module('Foodhub').component('foodOrder', {
  bindings: {
    'price': '<',
    'foodCounter': '=',
    'title': '<',
    'image': '<',
    'onDelete': '&',
  },

  template: require('./food_order.html'),

  controller: function(MoneyHelper) {

    if(typeof(this.foodCounter) == 'string') 
      this.foodCounter = parseInt(this.foodCounter);

    this.getPrice = function (num) {
      return MoneyHelper.convertToMoney(this.price);
    }

    this.clickCloseBtn = function () {
      this.onDelete();
    };

    this.getTotalPrice = function () {
      return MoneyHelper.convertToMoney(this.foodCounter * this.price);
    }
  }
});
