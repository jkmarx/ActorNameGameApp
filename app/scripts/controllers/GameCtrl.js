'use strict';

angular.module('NameGameApp')
  .controller('GameCtrl', GameCtrl)

GameCtrl.$inject = ['ActorsFactory', 'MoviesFactory', '$location', '$scope', '$timeout'];

function GameCtrl(ActorsFactory, MoviesFactory, $location, $scope, $timeout){
  var vm = this;
  vm.counter = 3;
  vm.score = 0;
  vm.actors = ActorsFactory.actors;
  vm.actorsNames = ActorsFactory.actorsNames;

  $scope.list1 = [];
  angular.forEach(vm.actors, function(val, key) {
    $scope.list1.push({});
  });
  $scope.list2 = ActorsFactory.actorsNamesRand;
  $scope.alerts = [];

  vm.searchMovie = function(movie){
    MoviesFactory.requestMovies(movie).then(function(response){
     vm.movies = MoviesFactory.movies;
    });
  };

  vm.scoreTally = function(){
    vm.score = vm.score + vm.counter * 10;
  }

  vm.counterTally = function(){
    if(vm.counter > 0){
      vm.counter = vm.counter - 1;
    }
  }

  vm.checkWinner = function(){
    if(vm.checkGuess()){
      console.log("you win");
      vm.scoreTally();
      vm.counter = 3;
      vm.addAlertWin();
      vm.resetLists();
    }else{
      console.log("try again");
      vm.counterTally();
      vm.addAlertFail();
      vm.resetLists();
      vm.resetRandList();
    }
  }

  vm.resetLists = function(){
    $scope.list1 =[];
  };

  vm.resetRandList() = function(){
    angular.copy(ActorsFactory.getCastNamesRand(vm.actorsNames.slice(0)), $scope.list2);
  }

  vm.checkGuess = function(){
    var flag = true;
    for(var i = 0; i<vm.actors.length; i++){
      if($scope.list1[i].name !== vm.actors[i].name){
        flag = false;
      }
    }
    return flag;
  }

  vm.listNames = function(arrCast){
    var names = arrCast.map(function(actor){
      return actor.name;
    })
    return names.join(', ');
  }

  vm.addAlertWin = function() {
    $scope.alerts.push({type: 'success', msg: 'Well Done Mate! ' + vm.listNames($scope.list1) + ' was correct.'});
  };

  vm.addAlertFail = function() {
    $scope.alerts.push({type: 'warning', msg: 'Try Again. ' + vm.listNames($scope.list1) + ' was incorrect.' });
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.startCallback = function(event, ui, name) {
    console.log('You started draggin: ' + name);
    $scope.draggedName = name;
  };

  $scope.dropCallback = function(event, ui) {
    console.log('hey, you dumped me :-(' , $scope.draggedName);
      if($scope.list2.length === 0){
        vm.checkWinner();
      }
  };

};
