'use strict';

/**
 * @ngdoc function
 * @name nameGameAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nameGameAppApp
 */
angular.module('NameGameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
