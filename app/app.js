'use strict';


// Declare app level module which depends on filters, and services
var spiceApp = angular.module('spiceupApp', 
	['Centralway.lungo-angular-bridge'
	,'spiceUpControllers'
	,'spiceUpServices']
	);

  spiceApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 
    $routeProvider.when('/superuser', {templateUrl: "app/partials/superuser.html"});
    $routeProvider.when('/adminreservation', {templateUrl: "app/partials/adminreservation.html"});
    $routeProvider.when('/adminreservation/reservationdetail', {templateUrl: "app/partials/adminreservation.html"});
    $routeProvider.when('/catlist', {templateUrl: "app/partials/catlist.html", controller: "DynamicCtrl"});
    $routeProvider.when('/deeplink/view/:msg', {templateUrl: "app/partials/deeplink.html", controller: "DeeplinkCtrl"});
    $routeProvider.when('/static', {templateUrl: "app/partials/static.html"});
    $routeProvider.when("/static/info", {});
    $routeProvider.when("/menudetail", {templateUrl: "app/partials/menudetail.html"});
    $routeProvider.when('/homepage/home', {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when('/homepage/myorder', {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when('/homepage/form-normal', {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when('/homepage/contact', {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when('/detail', {templateUrl: "app/partials/detail.html"});
    $routeProvider.when('/menus', {templateUrl: "app/partials/menu.html"});
    $routeProvider.otherwise({redirectTo: '/homepage/home'});
    $locationProvider.html5Mode(false);

  }]);  
