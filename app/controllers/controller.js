'use strict';

/* Controllers */

var spiceUpControllers = angular.module('spiceUpControllers', []);

spiceUpControllers.run(function()	{
	console.log('Hello there');

})

spiceUpControllers.controller('AppCtrl',['$scope', '$location','MenuResponder',
	function($scope, $location, MenuResponder)	{
		$scope.$parent.$root['manuList'] = MenuResponder.query();
		
		$scope.triggerAside = function() {
			console.log('triggering aside');
			Lungo.Router.aside('main', 'aside1');
		}
	}
	]);

spiceUpControllers.controller ('DynamicCtrl',['$scope', '$location','MenuResponder',
	function($scope, $location, MenuResponder)	{

		$scope.menuData = $scope.$parent.$root['manuList']
		//$scope.message = "Hello world!";

	}]);

spiceUpControllers.controller ('DeeplinkCtrl',['$scope', '$routeParams',
	function($scope, $routeParams)	{
		$scope.paramMsg = $routeParams.msg;
	}]);

