function AppCtrl($scope, $location) {    
  $scope.triggerAside = function() {
    console.log('triggering aside');
    Lungo.Router.aside('main', 'aside1');
  }    
}

function DynamicCtrl($scope) {
    $scope.message = "Hello world!";
}

function DeeplinkCtrl($scope, $routeParams) {
    $scope.paramMsg = $routeParams.msg;
}