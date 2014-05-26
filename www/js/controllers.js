var bakasurController = angular.module('bakasur.controllers', [])




bakasurController.controller('AccountCtrl', function($scope) {
});

bakasurController.controller('MenuController', function($scope, MenuList) {
  $scope.menuItemList = MenuList.all();
});

bakasurController.controller('MenuDetailController', function($scope, $stateParams, MenuList, OrderPlate) {
	

  $scope.menuItem = MenuList.get($stateParams.menuId);
  var isItem = OrderPlate.isItemPresent($scope.menuItem);
  $scope.itemQuantity = (isItem ? OrderPlate.getItemById($scope.menuItem).quantity : 1);
  $scope.isShowAdd = !isItem;
  $scope.baseType = $scope.menuItem.menu_category == 1 ? {c:'positive',t:'Vegetarian'} : {c:'assertive',t:'Non Vegetarian'}

  function refreshItemPage()  {
    $scope.isShowAdd = !OrderPlate.isItemPresent($scope.menuItem);
    console.log(OrderPlate.getOrder());
  }
  $scope.addItemQuantity = function(isAdd)	{
  	if(isAdd)	{
  		$scope.itemQuantity++;
  	}
  	else	{
  		$scope.itemQuantity >1 ? $scope.itemQuantity-- : $scope.itemQuantity = 1;
  	}
    //if already added item
     isItem ? (OrderPlate.getItemById($scope.menuItem).quantity = $scope.itemQuantity) : null;
  }

  $scope.addItem = function()	{
    $scope.menuItem.quantity = $scope.itemQuantity;
  	OrderPlate.addItem($scope.menuItem);
  	refreshItemPage()
  	
  }

  $scope.removeItem = function()	{
 	  OrderPlate.removeItem($scope.menuItem);
  	refreshItemPage();
    $scope.itemQuantity = 1;
  }

})

bakasurController.controller('HomeController', function($scope, $location) {
  console.log("HomeController")
	$scope.navigatePage = function(id, $event) {
		$location.path('/tab/menu');
	}
});

bakasurController.controller('MapController', function ($scope, $ionicLoading) {
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(43.07493, -89.381388),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);

    // Stop the side bar from dragging when mousedown/tapdown on the map
    google.maps.event.addDomListener(document.getElementById('map'), 'mousedown', function (e) {
      e.preventDefault();
      return false;
    });

    $scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.centerOnMe = function () {
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});

;
