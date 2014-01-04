
var spiceUpServices = angular.module('spiceUpServices', ['ngResource']);

spiceUpServices.factory('MenuResponder', ['$resource',
  function($resource){

     var myData =  $resource('http://localhost/restaurant/index.php/home/show_menulist', {}, {
       query: {method:'GET',  isArray:true}
     });

     return myData;

  }
  ]);

