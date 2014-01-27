'use strict';


// Declare app level module which depends on filters, and services
var spiceApp = angular.module('spiceupApp', 
	['Centralway.lungo-angular-bridge'
	,'spiceUpControllers'
	,'spiceUpServices'
    ,'showMenuServices'
    ,'cat']);
  spiceApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) { 
    $routeProvider.when('/superuser', {templateUrl: "app/partials/superuser.html"});
    $routeProvider.when('/adminreservation', {templateUrl: "app/partials/adminreservation.html"});
    $routeProvider.when('/adminreservation/reservationdetail', {templateUrl: "app/partials/adminreservation.html"});
    /*==============================================CONTACT US=================================================*/
    $routeProvider.when('/contactus/contact_form', {templateUrl: "app/partials/contact.html"});
    $routeProvider.when('/contactus/map', {templateUrl: "app/partials/contact.html"});
    /*================================================all items==================================================*/

    $routeProvider.when('/homepage/showallmenu', {templateUrl: "app/partials/homepage.html", controller: "menuCtrl"});
    $routeProvider.when('/homepage/menus', {templateUrl: "app/partials/homepage.html", controller: "DynamicCtrl"});
    $routeProvider.when('/homepage/menuitems', {templateUrl: "app/partials/homepage.html" ,controller: "menuCtrl"});
    $routeProvider.when('/deeplink/view/:msg', {templateUrl: "app/partials/deeplink.html", controller: "DeeplinkCtrl"});
    $routeProvider.when('/static', {templateUrl: "app/partials/static.html"});
    $routeProvider.when("/static/info", {});
    $routeProvider.when("/homepage/menudetail", {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when("/homepage/share", {templateUrl: "app/partials/homepage.html"});
    
    $routeProvider.when('/homepage/home', {templateUrl: "app/partials/homepage.html"});
/*===========================================My Order=======================================================*/
    $routeProvider.when('/order/myorder', {templateUrl: "app/partials/orders.html"});
    $routeProvider.when('/order/history', {templateUrl: "app/partials/orders.html"});

    $routeProvider.when('/myplate', {templateUrl: "app/partials/myplate.html"});
    $routeProvider.when('/myplate/editplate', {templateUrl: "app/partials/myplate.html"});

    $routeProvider.when('/homepage/form-normal', {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when('/homepage/login', {templateUrl: "app/partials/homepage.html"});
    $routeProvider.when('/menus', {templateUrl: "app/partials/menu.html"});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);

  }]);  

