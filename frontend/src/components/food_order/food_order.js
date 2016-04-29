angular.module('Foodhub').component('foodOrder', {
    bindings: {
       'price': '@',
       'foodCounter': '@',
       'title': '@',
       'img': '@'
    },

    template: require('./food_order.html'),

    controller: function() {


        this.getNumLikeMoney = function (num) {
          let n = parseInt(num);

          n = n.toFixed(0).replace(/./g, function(c, i, a) {
              return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
          });

          return n + " р.";
        }
    }
});
