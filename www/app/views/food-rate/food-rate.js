(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('Food-Rating routing')
    $stateProvider
      .state('food-rate', {
        url: '/food-rate',
        
            templateUrl: 'app/views/food-rate/food-rate.html',
            controller: 'FoodRateCtrl'

      });

  });

  'use strict';

  angular.module('starter').controller('FoodRateCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    console.log('FoodRateCtrl controller')
 $scope.rate = 3;
  $scope.max = 5;

  });

}).call(this);