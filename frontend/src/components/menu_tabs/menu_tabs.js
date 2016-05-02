angular.module('Foodhub')
  .directive('menuTabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      template: require('./menu_tabs.html'),
      replace: true,
      controller: ['$scope', function($scope) {
        var panes = $scope.currentPanes = [];

        $scope.select = function selectPane(pane) {
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
      }]
    };
  })
  .directive('menuPane', function() {
    return {
      require: '^menuTabs',
      restrict: 'E',
      transclude: true,
      template: require('./menu_pane.html'),
      replace: true,
      scope:{
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      }
    };
  });
