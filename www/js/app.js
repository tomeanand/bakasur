
angular.module('bakasur', ['ionic','openfb','bakasur.controllers', 'bakasur.services', 'ngAnimate', 'wu.masonry'])

//.run(function($ionicPlatform) {
   .run(function($rootScope, $state, $ionicPlatform, $location, $window, OpenFB) {

    var path = $location.absUrl();
    $rootScope.baseUrl = ($location.absUrl().indexOf("localhost/restaurant") > 0 )  ? "http://localhost/restaurant-mobile/" : "http://bakasur.mxbit.co.in/";
    $rootScope.jsonUrl =  $rootScope.baseUrl + "index.php/";

    OpenFB.init('1428976647372797');
    
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

    $rootScope.$on('$stateChangeStart', function(event, toState) {
      //console.log(toState.name)
        if (toState.name !== "app.login" && toState.name !== "app.logout" && !$window.sessionStorage['fbtoken']) {
            //$state.go('tab.menu');
            //event.preventDefault();
        }
    });

    $rootScope.$on('OAuthException', function() {
        $state.go('tab.track');
    });

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

      .state('home', {
      url: "/home",
      controller: 'HomeController',
      templateUrl: "templates/home.html",
    })

    // Each tab has its own nav history stack:



    .state('tab.allmenu', {url: '/allmenu',
      views: {'tab-allmenu': {templateUrl: 'templates/tab-allmenu.html',controller: 'MenuController'}
      }
    })

    .state('tab.menudetailed', {url: '/menudetailed/:menuId',
      views: {'tab-allmenu': {templateUrl: 'templates/menu-detailed.html',controller: 'MenuDetailController'}
      }
    })

    .state('tab.menu', { url: '/menu',
      views: {'tab-menu': {templateUrl: 'templates/tab-menu.html',controller: 'MenuController'}
      }
    })

    .state('tab.menudetails', {url: '/menudetails/:menuId',
      views: {'tab-menu': {templateUrl: 'templates/menu-details.html',controller: 'MenuDetailController'}
      }
    })    

    .state('tab.orders', {url: '/orders',
      views: {'tab-orders': {templateUrl: 'templates/tab-orders.html',controller: 'MyOrderController'}
      }
    })

    .state('tab.login', {url: '/login',
      views: {'tab-login': {templateUrl: 'templates/tab-login.html',controller: 'FBLoginController'}
      }
    })

    .state('tab.track', {url: '/track',
      views: {'tab-track': {templateUrl: 'templates/tab-track.html',controller: 'MapController'}
      }
    })

    .state('tab.contact', {url: '/contact',
      views: {'tab-contact': {templateUrl: 'templates/tab-contact.html'}
      }
    })

    .state('tab.checkout', {url: '/checkout',
      views: {'tab-menu': {templateUrl: 'templates/tab-checkout.html',controller:'CheckoutController'}
      }
    })  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});





// .state('tab.menudetail', {    = does not matter so far just a name
//       url: '/friend/:friendId', =  url and the parameter name has to be same in controller
//       views: {
//         'tab-menu': { = current selected tab
//           templateUrl: 'templates/menu-detail.html',
//           controller: 'MenuDetailController'
//         }
//       }
//     })

