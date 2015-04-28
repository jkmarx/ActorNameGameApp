'use strict';

angular.module('NameGameApp')
  .controller('GameCtrl', GameCtrl)

GameCtrl.$inject = ['ActorsFactory', 'MoviesFactory', '$location', '$scope', '$timeout'];

function GameCtrl(ActorsFactory, MoviesFactory, $location, $scope, $timeout){
  var vm = this;
  vm.counter = 3;
  vm.score = 0;
  vm.actorsNames = ActorsFactory.actorsNames;

  vm.searchMovie = function(movie){
    MoviesFactory.requestMovies(movie).then(function(response){
     vm.movies = MoviesFactory.movies;
    });
  };

  vm.scoreTally = function(){
    vm.score = vm.score + vm.counter * 10;
  }

  vm.checkWinner = function(){
    if(vm.checkGuess()){
      console.log("you win");
      vm.scoreTally();
      vm.counter = 3;
      $scope.list1=[];
    }else{
      console.log("try again");
      if(vm.counter > 0){
        vm.counter = vm.counter - 1;
      }
      $scope.list1 =[];
      angular.copy(ActorsFactory.getCastNamesRand(vm.actorsNames.slice(0)), $scope.list2);
    }
  }

  $scope.list1 = [];
  vm.actors = ActorsFactory.actors;
  angular.forEach(vm.actors, function(val, key) {
    $scope.list1.push({});
  });


  $scope.list2 = ActorsFactory.actorsNamesRand;

  vm.checkGuess = function(){
    var flag = true;
    for(var i = 0; i<vm.actors.length; i++){
      if($scope.list1[i].name !== vm.actors[i].name){
        flag = false;
      }
    }
    return flag;
  }

  $scope.startCallback = function(event, ui, name) {
    console.log('You started draggin: ' + name);
    $scope.draggedName = name;
  };

  $scope.stopCallback = function(event, ui) {
    console.log('Why did you stop draggin me?');
  };

  $scope.dragCallback = function(event, ui) {
    console.log('hey, look I`m flying');
  };

  $scope.dropCallback = function(event, ui) {
    console.log('hey, you dumped me :-(' , $scope.draggedName);
      if($scope.list2.length === 0){
        vm.checkWinner();
      }
  };

  $scope.overCallback = function(event, ui) {
    console.log('Look, I`m over you');
  };

  $scope.outCallback = function(event, ui) {
    console.log('I`m not, hehe');
  };
};
