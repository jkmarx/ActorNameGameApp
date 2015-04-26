'use strict';

angular.module('NameGameApp').factory('ActorsFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var actors = [];

  var requestActors = function(movie) {
    var params = {
      movie: movie
    }
    return $http.post(ServerUrl + '/movies/cast', params).then(function(response) {
      console.log(response.data);
      angular.copy(response.data, actors);
    }, requestFailure);
  };

  function requestFailure(response){
    console.log('in ActorsFactory requestFailure');
    console.log(response);
  }

  return {
    actors: actors,
    requestActors: requestActors
  };

}]);
