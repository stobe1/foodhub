angular.module('Foodhub')
.component('textInput', {
  bindings: {
    label: '@?',
    inverted: '<?',
    name: '@?',
    model: '=',
    invalid: '<?',
    readonly: '<?',
    onChange: '=?'
  },
  template: require('./text_input.html'),
  controller: function() {
    this.onModelChanged = function() {
      if (this.onChange) {
        this.onChange();
      }
    }
  }
})
