'use strict';

angular.module('Foodhub').component('customButton', {
    bindings: {
       'title': '@',
       'href': '@',
       'isBlank': '@',
       'isStretch' : '@',
       'isTransparent': '@',
       'clickAction' : '=',
    },

    template: require('./button.html'),

    controller: function() {

      this.isTransparentBtn = function () {
        return (this.isTransparent && this.isTransparent != 0);
      }

      this.isStretchBtn = function () {
        return (this.isStretch && this.isStretch != 0);
      }

      this.getTargetData = function () {
        return (this.isBlank) ? "_blank" : "_self";
      }


      this.click_btn = function ($event) {
        if(this.clickAction){
          $event.preventDefault() 
          this.clickAction()
        }
      }

    }
});
