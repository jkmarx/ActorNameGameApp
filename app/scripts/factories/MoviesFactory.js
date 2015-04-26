'use strict';

angular.module('NameGameApp').factory('MoviesFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var movies = [];

  var requestMovies = function(movie) {
    var params = {
      movie: movie
    };
    return $http.post(ServerUrl + '/movies', params).then(function(response) {
      console.log(response.data);
      angular.copy(response.data, movies);
    }, requestFailure);
  };

  function requestFailure(response){
    console.log('in MoviesFactory requestFailure');
    console.log(response);
  }

  return {
    movies: movies,
    requestMovies: requestMovies
  };

}]);
