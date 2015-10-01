(function() {
  'use strict';
  angular.module('starter').config(function($stateProvider) {
    console.log('Comment routing')
    $stateProvider
      .state('comment', {
        url: '/comment',
        
            templateUrl: 'app/views/comment/comment.html',
            controller: 'CommentCtrl'

      });

  });

  'use strict';

  angular.module('starter').controller('CommentCtrl', function($scope, $rootScope, $location, $stateParams,$http ) {
    console.log('CommentCtrl controller')

  });

}).call(this);
