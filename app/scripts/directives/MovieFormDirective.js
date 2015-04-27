'use strict';
angular.module('NameGameApp').directive('movieForm',[function(){
  return {
    restrict: 'E',
    templateUrl: 'views/movie-form.html',
    controller: 'GameCtrl',
    controllerAs: 'gameCtrl',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);
