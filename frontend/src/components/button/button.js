'use strict';

angular.module('Foodhub').component('customButton', {
    bindings: {
       'title': '@',
       'href': '@',
       'isBlank': '@',
       'isStretch' : '@',
       'isTransparent': '@',
       'onClick' : '&',
    },

    template: require('./button.html'),

    controller: function() {

      this.isTransparentBtn = function () {
        return (this.isTransparent != undefined);
      }

      this.isStretchBtn = function () {
        return (this.isStretch != undefined);
      }

      this.getTargetData = function () {
        return (this.isBlank != undefined) ? "_blank" : "_self";
      }

      this.click_btn = function ($event) {
        this.onClick();
      }

    }
});
