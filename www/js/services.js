var bakasurService = angular.module('bakasur.services', ['ngResource']);

/**
 * A simple example service that returns some data.
 */
bakasurService.factory('MenuList', function($resource) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var menuItems = [];


var menu = $resource('http://localhost/restaurant/index.php/home/show_menulist', {}, { getMenu: {method:'GET',isArray:true} });
     var menuList = menu.getMenu(function(){
       
       for(var j=0; j<menuList.length; j++){
        var pjvo = JSON.parse(  angular.toJson(menuList[j]) );
        pjvo.id = j;
         menuItems.push(pjvo);
       }
       })


  return {
    all: function() {
      return menuItems;
    },
    get: function(menuId) {
      // Simple index lookup
      return menuItems[menuId];
    }
  }
});

bakasurService.factory('OrderPlate', function() {
  var orderData = [];

  return  {
   addItem:function(item)  {
    orderData[item.menu_id] = item
  },
  removeItem:function(item)  {
    if(orderData[item.menu_id])  {
      delete orderData[item.menu_id];
    }
  },
  getItemById:function(item)  {
    if(orderData[item.menu_id])  {
      return orderData[item.menu_id];
    }
  },
  isItemPresent:function(item)  {
    if(orderData[item.menu_id])  {
      return true;
    }
    return false;
  },
  getOrder:function() {
    return orderData;
  }
}
});
