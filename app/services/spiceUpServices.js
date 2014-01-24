
var spiceUpServices = angular.module('spiceUpServices', ['ngResource']);

spiceUpServices.factory('MenuResponder', ['$resource',function($resource){
     var myData =  $resource('/restaurantapp/index.php/home/show_menu_subcategory', {}, {
       query: {method:'GET', isArray:true}
     });
     return myData;
  }
  ]);

