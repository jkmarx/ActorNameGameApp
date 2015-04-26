'use strict';

angular.module('NameGameApp')
  .controller('GameCtrl', GameCtrl);

GameCtrl.$inject = ['ActorsFactory', 'MoviesFactory'];

function GameCtrl(ActorsFactory, MoviesFactory){
  var vm = this;

  var movie = {};
  movie.id = '0110357';
  movie.title = 'The Lion King';
  vm.movies = MoviesFactory.movies;
  vm.actors = ActorsFactory.actors;

  MoviesFactory.requestMovies(movie).then(function(response){
    vm.movies = MoviesFactory.movies;
  });

  ActorsFactory.requestActors(movie).then(function(response){
    vm.actors = ActorsFactory.actors;
  });

  debugger;

}
