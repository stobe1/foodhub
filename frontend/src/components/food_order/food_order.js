angular.module('Foodhub').component('foodOrder', {
  bindings: {
    'price': '<',
    'foodCounter': '=',
    'title': '<',
    'image': '<',
    'onDelete': '&',
  },

  template: require('./food_order.html'),

  controller: function() {

    if(typeof(this.foodCounter) == 'string') 
      this.foodCounter = parseInt(this.foodCounter);

    this.clickCloseBtn = function () {
      this.onDelete();
    };

    this.getTotalPrice = function () {
      return this.foodCounter * this.price;
    }
  }
});
