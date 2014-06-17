var bakasurDirective = angular.module('bakasur.directives', ['ionic'])

bakasurDirective.directive('mapPanel', function()  {
  console.log("Hell there")
  return {  
    restrict:'E',
    templateUrl:'templates/gmapPanel.html',
    controller:function()	{
    		console.log("this")
    },
    controllerAs:'mappingControl'

  };
});