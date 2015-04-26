'use strict';

/**
 * @ngdoc function
 * @name nameGameAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nameGameAppApp
 */
angular.module('NameGameApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
