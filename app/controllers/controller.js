'use strict';

/* Controllers */

var spiceUpControllers = angular.module('spiceUpControllers', []);

spiceUpControllers.run(function()	{
	console.log('Hello there');

})

spiceUpControllers.controller('AppCtrl',['$scope', '$location','MenuResponder','MenuService','menuBycat',
	function($scope, $location, MenuResponder,MenuService,menuBycat)	{
		$scope.$parent.$root['manuList'] = MenuResponder.query();
		$scope.$parent.$root['menuList'] = MenuService.query();
		$scope.$parent.$root['CatMenu'] = menuBycat.query({menu_category : 1});

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

spiceUpControllers.controller ('menuCtrl',['$scope', '$location','MenuService','menuBycat',
	function($scope, $location, $routeParams,MenuService,menuBycat)	{
		$scope.Showmenu = $scope.$parent.$root['menuList']

		$scope.ShowmenuByCat = 	$scope.$parent.$root['CatMenu'] 
		$scope.paramMsg = $routeParams.menu_category;

	}]);


// spiceUpControllers.controller ('CatCtrl',['$scope', '$location','menuBycat',
// 	function($scope, $location,menuBycat)	{
		 
// 		$scope.ShowmenuByCat = $scope.$parent.$root['CatMenu']
// 	}]);

// function Ctrl($scope, shareScope) {
//     $scope.prop2 = shareScope.set('data');
//     $scope.both = shareScope.get();
// }