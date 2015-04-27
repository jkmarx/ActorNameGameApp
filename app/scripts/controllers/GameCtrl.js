'use strict';

angular.module('NameGameApp')
  .controller('GameCtrl', GameCtrl);

GameCtrl.$inject = ['ActorsFactory', 'MoviesFactory', '$location', '$scope', '$timeout'];

function GameCtrl(ActorsFactory, MoviesFactory, $location, $scope, $timeout){
  var vm = this;

  // var movie = {};
  // movie.id = '0110357';
  // movie.title = 'The Lion King';
  // vm.movies = MoviesFactory.movies;
  // vm.actors = ActorsFactory.actors;

  // MoviesFactory.requestMovies(movie).then(function(response){
  //   vm.movies = MoviesFactory.movies;
  // });

  // ActorsFactory.requestActors(movie).then(function(response){
  vm.actors = ActorsFactory.actors;
  // });

  vm.searchMovie = function(movie){
    MoviesFactory.requestMovies(movie).then(function(response){
     vm.movies = MoviesFactory.movies;
    });
  };

  $scope.list1 = [];
  $scope.list2 = [];
  $scope.list3 = [];
  $scope.list4 = [];

  $scope.list5 = [
    { 'title': 'Item 1', 'drag': true },
    { 'title': 'Item 2', 'drag': true },
    { 'title': 'Item 3', 'drag': true },
    { 'title': 'Item 4', 'drag': true },
    { 'title': 'Item 5', 'drag': true },
    { 'title': 'Item 6', 'drag': true },
    { 'title': 'Item 7', 'drag': true },
    { 'title': 'Item 8', 'drag': true }
  ];

  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      if ($scope.list1.length >= 2) {
        return false;
      } else {
        return true;
      }
    }
  };
}
