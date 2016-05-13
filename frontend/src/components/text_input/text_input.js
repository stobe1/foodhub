angular.module('Foodhub')
.component('textInput', {
  bindings: {
    label: '@?',
    inverted: '<?',
    name: '@?',
    placeholder: '@?',
    model: '=',
    invalid: '<?',
    readonly: '<?',
    onChange: '=?',
    type: '@?',
    pattern: '@?'
  },
  template: require('./text_input.html'),
  controller: function() {
    this.onModelChanged = function() {
      if (this.onChange) {
        this.onChange();
      }
    };
  }
});
