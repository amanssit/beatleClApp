(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    $stateProvider.state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'app/views/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    });
  });

  'use strict';

  angular.module('starter').controller('LoginCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    console.log('LoginCtrl controller')
   
  });

}).call(this);