angular.module('Foodhub').component('sessionInfo', {
  bindings: {
    'title': '<',
    'shops': '<',
    'session': '=',
    'readonly': '<'
  },
  template: require('./session_info.html'),

  controller: function($scope) {

    this.validateTime = function(time) {
      var regexp = /^(\d{1,2}):(\d{1,2})$/;
      var timeParts = regexp.exec(time);
      if (timeParts) {
        var hours = parseInt(timeParts[1]);
        var minutes = parseInt(timeParts[2]);
        return 0 <= hours && hours <= 23 && 0 <= minutes && minutes <= 59;
      } else {
        return false;
      }
    }

    this.onShopChanged = function() {
      this.session.shopId = this.selectedShop.id;
    }

    this.getTimeLabel = function() {
      return this.session.deliveryTime ? 'Время прибытия заказа:' : 'Время оформления заказа:';
    }

    this.getRemeiningAmount = function() {
      return this.session.price < this.selectedShop.minOrderPrice ? this.selectedShop.minOrderPrice - this.session.price : 0;
    }

    this.init = function() {
      this.selectUniqID = Math.random().toString(36).substring(10);

      if (!this.shops || !this.session) return;

      $scope.sessionTime = this.session.deliveryTime ? this.session.deliveryTime : this.session.orderTime;

      var index = this.shops.map(function(shop){ return shop.id }).indexOf(this.session.shopId);
      if (index != -1) {
        this.selectedShop = this.shops[index];
      } else {
        this.selectedShop = this.shops[0];
        this.session.shopId = this.selectedShop.Id;
      }
      this.session.valid = true;
      this.session.invalidTime = false;
    }

    this.init();

    $scope.$watch('sessionTime', (function() {
      if (this.validateTime($scope.sessionTime)) {
        if (this.session.deliveryTime) {
          this.session.deliveryTime = $scope.sessionTime;
        } else {
          this.session.orderTime = $scope.sessionTime;
        }
        this.session.valid = true;
        this.session.invalidTime = false;
      } else {
        this.session.valid = false;
        this.session.invalidTime = true;
      }
    }).bind(this))
  }
});
