angular.module('Foodhub').component('productCard', {
  bindings: {
    'isAdd': '=',
    'title': '@',
    'text': '@',
    'image': '@',
    'price': '@',
    'foodCounter': '=',
    'onAdd': '&',
    'onDelete': '&',
  },

  template: require('./product_card.html'),

  controller: function() {
    this.num_price = parseInt(this.price.split(' ').join(''));

    this.getNumLikeMoney = function (num) {
      let n = parseInt(num);

      n = n.toFixed(0).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
      });

      return n + " р.";
    }


    this.click_add = function () {
      this.isAdd = true;
      this.foodCounter = (this.foodCounter > 0) ? this.foodCounter : 1;
      this.onAdd();
    }

    this.click_delete = function () {
      this.isAdd = false;
      this.foodCounter = 0;
      this.onDelete();
    }

  }
});