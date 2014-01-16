'use strict';


// Declare app level module which depends on filters, and services
var spiceApp = angular.module('spiceupApp', 
	['Centralway.lungo-angular-bridge'
	,'spiceUpControllers'
	,'spiceUpServices']
	);

  spiceApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 
    $routeProvider.when('/basemenu', {templateUrl: "app/partials/basemenu.html", controller: "DynamicCtrl"});
    $routeProvider.when('/deeplink/view/:msg', {templateUrl: "app/partials/deeplink.html", controller: "DeeplinkCtrl"});
    $routeProvider.when('/static', {templateUrl: "app/partials/static.html"});
    $routeProvider.when("/static/info", {});
    $routeProvider.when("/menudetail", {templateUrl: "app/partials/menudetail.html"});
    $routeProvider.when('/homepage', {templateUrl: "app/partials/homepage.html"});
     $routeProvider.when('/subcategorylist', {templateUrl: "app/partials/subcategorylist.html", controller: "DynamicCtrl"});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);

  }]);  
