var postcatid = angular.module('postcatid', ['ngResource']);

postcatid.factory('catIdPost', ['$resource',
  function($resource){
    var catIdPost= $resource('/restaurantapp/index.php/home/show_menu/', {subcategory_id: '@subcategory_id'}, {
      get: {method:'GET', params: { subcategory_id: 'subcategory_id' }, isArray:true}
    });
     return catIdPost;
  }]);