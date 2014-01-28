'use strict';

/* Controllers */

var spiceUpControllers = angular.module('spiceUpControllers', []);

spiceUpControllers.run(function()	{
	console.log('Hello there');

})

spiceUpControllers.controller('AppCtrl',['$scope', '$location','MenuResponder',
								'MenuService','menuBycat','menuIdPost',
	function($scope, $location, MenuResponder,MenuService,menuBycat,menuIdPost)	{
		$scope.$parent.$root['manuList'] = MenuResponder.query();
		$scope.$parent.$root['menuList'] = MenuService.query();
		$scope.$parent.$root['IdPost'] = menuIdPost.query();
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

		$scope.ShowmenuByCat= 	$scope.$parent.$root['CatMenu'] 
		$scope.paramMsg = $routeParams.menu_category;

	}]);


spiceUpControllers.controller('PostCtrl', ['$scope','$location', '$routeParams', 'menuIdPost',
  function($scope,$location, $routeParams, menuIdPost) {

  	$scope.ShowmenuById = 	$scope.$parent.$root['IdPost'] 
    // $scope.post = menuIdPost.get({menu_id: $routeParams.menu_id});
$scope.post =$routeParams.menu_id;
$scope.post =$routeParams.menu_name;
  }]);


// angular.module('clientApp')
//   .controller('ProductCtrl', function ($scope, ProductsFactory, $modal, $log, $stateParams) {
//     var productItems = ProductsFactory.getProducts()
//     $scope.products = productItems.query();
//     $scope.selectedProduct = productItems.get({productId:1});
//   });
// spiceUpControllers.controller ('CatCtrl',['$scope', '$location','menuBycat',
// 	function($scope, $location,menuBycat)	{
		 
// 		$scope.ShowmenuByCat = $scope.$parent.$root['CatMenu']
// 	}]);

// function Ctrl($scope, shareScope) {
//     $scope.prop2 = shareScope.set('data');
//     $scope.both = shareScope.get();
// }