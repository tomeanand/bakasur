var showMenuServices = angular.module('showMenuServices', ['ngResource']);

showMenuServices.factory('MenuService', ['$resource',function($resource){
     var menu =  $resource('/restaurantapp/index.php/home/show_menulist', {}, {
       query: {method:'GET', isArray:true}
     });
     return menu;
  }
  ]);

