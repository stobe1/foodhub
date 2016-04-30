angular.module('Foodhub')
  .directive('menuTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      controller: ['$scope', '$element', function($scope, $element) {
        var panes = $scope.currentPanes = [];

        $scope.select = function selectPane(pane) {
          console.log('select', pane);
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        this.addPane = function addPane(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          panes.push(pane);
        };
      }],
      template: require('./menu_tabs.html'),
      replace: true
    };
  })
  .directive('menuPane', ['$parse', function($parse) {
    return {
      require: '^menuTabs',
      restrict: 'E',
      transclude: true,
      scope:{
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template: require('./menu_pane.html'),
      replace: true
    };
  }]);
