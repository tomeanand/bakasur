var bakasurService = angular.module('bakasur.services', ['ngResource','bakasur.storage']);

/**
 * A simple example service that returns some data.
 */
 
bakasurService.factory('MenuList', function($resource, $rootScope,$localForage) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
 
  var menuItems = [];

//console.log($localForage);
//http://bakasur.mxbit.co.in/index.php/home/show_menulist
//http://bakasur.mxbit.co.in/index.php/api/menu/all

 $localForage.get('itemlist').then(function(data) {
  if(data)  {console.log("Present")}
      else  {console.log("Not Present");}
  
 });

var resourceUrl = $rootScope.jsonUrl+'api/menu/all';


var menu = $resource( resourceUrl, {}, { getMenu: {method:'GET',isArray:true} });
     var menuList = menu.getMenu(function(){
       
       for(var j=0; j<menuList.length; j++){
        var pjvo = JSON.parse(  angular.toJson(menuList[j]) );
        pjvo.id = j;
         menuItems.push(pjvo);
       }
       })

    $localForage.setItem('itemlist',menuItems).then(function() {
         $localForage.get('itemlist').then(function(data) {
           console.log(data)
        });
    });


  return {
    all: function() {
      return menuItems;
    },
    get: function(menuId) {
      // Simple index lookup
      var item = menuItems[menuId];
      item.index = menuId;
      return item;
    }
  }
});

bakasurService.factory('OrderPlate', function() {
  var orderData = new Object();

  function getItemData(item) {

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
       quantity: item.quantity,
       item_index: item.index

  };
  delete item;
  return newItem;
}

  return  {
   addItem:function(item)  {
    var newItem = getItemData(item); delete item;
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
  },
  getTotal:function() {
    var total = 0;
    for(var i in orderData) {
        total +=  (orderData[i].menu_price * orderData[i].quantity);
    }
    return total;
  }
}
});
