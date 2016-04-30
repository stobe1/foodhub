angular.module('Foodhub').component('foodOrder', {
  bindings: {
    'price': '@',
    'foodCounter': '=',
    'title': '@',
    'image': '@',
    'onDelete': '&',
  },

  template: require('./food_order.html'),

  controller: function() {
    this.num_price = parseInt(this.price.split(' ').join(''));

    this.foodCounter = parseInt(this.foodCounter);

    this.getNumLikeMoney = function (num) {
      let n = parseInt(num);

      n = n.toFixed(0).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
      });

      return n + " р.";
    }

    this.clickCloseBtn = function ($event) {
      this.onDelete();
    };

  }
});
