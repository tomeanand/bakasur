var bakasurDirective = angular.module('bakasur.directives', ['ionic'])

bakasurDirective.directive('mapPanel', function()  {
  console.log("Map Panel there")
  return {  
    restrict:'E',
    templateUrl:'templates/gmapPanel.html'
  };
});

