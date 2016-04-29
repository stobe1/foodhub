'use strict';

<<<<<<< HEAD
angular.module('Foodhub').component('customButton', {
    bindings: {
       'title': '@',
       'href': '@',
       'isBlank': '@',
       'isStretch' : '@',
       'isTransparent': '@',
       'onClick' : '&',
=======
angular.module('Foodhub').component('myButton', {
    bindings: {
       'title': '=',
       'href': '=',
       'target': '=',
       'isStretch' : '=',
       "isTransparent": "=",
>>>>>>> user_card
    },

    template: require('./button.html'),

    controller: function() {

<<<<<<< HEAD
      this.isTransparentBtn = function () {
        return ( typeof(  this.isTransparent)  !== 'undefined');
      }

      this.isStretchBtn = function () {
        return ( typeof( this.isStretch)  !== 'undefined');
      }

      this.getTargetData = function () {
        return ( typeof( this.isBlank)  !== 'undefined') ? "_blank" : "_self";
      }

      this.click_btn = function ($event) {
        this.onClick();
      }

    }
});
=======
    }
});
>>>>>>> user_card
