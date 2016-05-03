const angular = require('angular');
const templateHtml = require('./product_card.html');

angular.module('Foodhub').component('productCard', {
  bindings: {
    isAdded: '=',
    title: '<',
    text: '<',
    image: '<',
    price: '<',
    foodCounter: '=',
    onAdd: '&',
    onDelete: '&',
  },

  template: templateHtml,

  controller: function productCardController() {
    this.clickAddBtn = function clickAddBtn() {
      this.isAdded = true;
      this.foodCounter = (this.foodCounter > 0) ? this.foodCounter : 1;
      this.onAdd();
    };

    this.clickDeleteBtn = function clickDeleteBtn() {
      this.isAdded = false;
      this.foodCounter = 0;
      this.onDelete();
    };
  },
});
