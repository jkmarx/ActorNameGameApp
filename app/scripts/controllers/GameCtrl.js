'use strict';

angular.module('NameGameApp')
  .controller('GameCtrl', GameCtrl)

GameCtrl.$inject = ['ActorsFactory', 'MoviesFactory', '$location', '$scope', '$timeout'];

function GameCtrl(ActorsFactory, MoviesFactory, $location, $scope, $timeout){
  var vm = this;
  var counter = 0;

  // var movie = {};
  // movie.id = '0110357';
  // movie.title = 'The Lion King';
  // vm.movies = MoviesFactory.movies;
  // vm.actors = ActorsFactory.actors;

  vm.searchMovie = function(movie){
    MoviesFactory.requestMovies(movie).then(function(response){
     vm.movies = MoviesFactory.movies;
    });
  };


  // $scope.images = [{'thumb': '1.png'},{'thumb': '2.png'},{'thumb': '3.png'},{'thumb': '4.png'}]
  $scope.list1 = [];
  vm.actors = ActorsFactory.actors;
  angular.forEach(vm.actors, function(val, key) {
    $scope.list1.push({});
  });


  $scope.list2 = ActorsFactory.actorsNamesRand;
  // vm.castnames = vm.getCastNames();
  // vm.quiznames = vm.getCastNamesRand(vm.castnames);
  // if($scope.list1.length === 5 && $scope.list2.length === 0){
  //     console.log(here goes math logic);
  //   }
  vm.checkGuess = function(){
    var flag = true;
    for(var i = 0; i<vm.actors.length; i++){
      if($scope.list1[i].name !== vm.actors[i].name){
        flag = false;
      }
    }
    return flag;
  }

  // $scope.list2 = [
  //   { 'title': 'KnockoutJS', 'drag': true },
  //   { 'title': 'EmberJS', 'drag': true },
  //   { 'title': 'BackboneJS', 'drag': true },
  //   { 'title': 'AngularJS', 'drag': true }
  // ];

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
        if(vm.checkGuess()){
          console.log("you win");
        }else{
          console.log("try again");
        }
      }
  };

  $scope.overCallback = function(event, ui) {
    console.log('Look, I`m over you');
  };

  $scope.outCallback = function(event, ui) {
    console.log('I`m not, hehe');
  };
};
