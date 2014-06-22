var bakasurService = angular.module('bakasur.services', ['ngResource']);

/**
 * A simple example service that returns some data.
 */
 
bakasurService.factory('MenuList', function($resource, $rootScope) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
 
  var menuItems = [];

//console.log($localForage);
//http://bakasur.mxbit.co.in/index.php/home/show_menulist
//http://bakasur.mxbit.co.in/index.php/api/menu/all
var resourceUrl = $rootScope.jsonUrl+'api/menu/all';
console.log(resourceUrl)
var menu = $resource( resourceUrl, {}, { getMenu: {method:'GET',isArray:true} });
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
  var orderData = new Object();

  function getDateItems(item) {
  var newItem = new Object();
      newItem = {
      id: item.menu_id,
       menu_category: item.menu_category,
       menu_id: item.menu_id,
       menu_cuisine: item.menu_cuisine,
       menu_description: item.menu_description,
       menu_id: item.menu_id,
       menu_image: item.menu_image,
       menu_name: item.menu_name,
       menu_price: item.menu_price,
       menu_servefor: item.menu_servefor,
       menu_subcategory: item.menu_subcategory,
       quantity: item.quantity
  };
  delete item;
  return newItem;
}

  return  {
   addItem:function(item)  {
    var newItem = getDateItems(item); delete item;
    orderData[''+newItem.menu_id+''] = newItem;
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
  },
  isEmpty:function()  {
    return (orderData.length == 0 ? true : false);
  }
}
});
