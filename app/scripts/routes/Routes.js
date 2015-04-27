'use strict';

angular.module('NameGameApp').config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/welcome',{
        templateUrl: 'views/welcome.html',
        controller: 'GameCtrl'
      })
      .when('/game',{
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/about',{
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/welcome'
      });
    }
  ]);
