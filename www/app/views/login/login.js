(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    
// removing app because there is no abstract route or masterpage
// if masterpage then app/login
// if not /login no app
    $stateProvider.state('login', {
      url: '/login',
      // when u use masterpage the u
      
      templateUrl: 'app/views/login/login.html',
      controller: 'LoginCtrl'      
   
    });
  });

  'use strict';

  angular.module('starter').controller('LoginCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    console.log('LoginCtrl controller')
   
  });

}).call(this);