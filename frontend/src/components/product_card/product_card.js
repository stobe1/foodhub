const angular = require('angular');

angular.module('Foodhub').component('productCard', {
  bindings: {
    isAdded: '<',
    onAdd: '&',
    food: '<'
  },

  template: require('./product_card.html'),

  controller: function productCardController() {
    this.quantity = 1;
    this.clickAddBtn = function clickAddBtn() {
      this.quantity = (this.quantity > 0) ? this.quantity : 1;
      this.onAdd()(this.food, this.quantity);
    };
  },
});
