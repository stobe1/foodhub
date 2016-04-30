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
        return (this.isTransparent && this.isTransparent != 0 && this.isTransparent != "false");
      }

      this.isStretchBtn = function () {
        return (this.isStretch && this.isStretch != 0 && this.isStretch != "false");
      }

      this.getTargetData = function () {
        return (this.isBlank && this.isBlank != 0 && this.isBlank != "false") ? "_blank" : "_self";
      }

      this.click_btn = function ($event) {
        if(this.clickAction){
          $event.preventDefault() 
          this.clickAction()
        }
      }

    }
});
