// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
console.log('config')
$stateProvider

//removed masterpage because it prefix all url by /app/
//abstract route or parent or as per asp masterpage
/*.state('app', {
url: '/app',
abstract: true,
templateUrl: 'app/master.html',
controller: 'AppCtrl'
})*/




// if none of the above states are matched, use this as the fallback
// removed app because there is no abstract route
// below is the default route. basically / will be the defalt
$urlRouterProvider.otherwise('/login');
//$locationProvider.html5Mode(true);
})