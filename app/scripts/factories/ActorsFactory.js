'use strict';

angular.module('NameGameApp').factory('ActorsFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var actors = [];
  var actorsNames = [];
  var actorsNamesRand = [];

  var requestActors = function(movie) {
    var params = {
      movie: movie
    };
    return $http.post(ServerUrl + '/movies/cast', params).then(function(response) {
      console.log(response.data);
      angular.copy(response.data, actors);
      angular.copy(getCastNames(actors), actorsNames);
      angular.copy(getCastNamesRand(actorsNames.slice(0)), actorsNamesRand);
    }, requestFailure);
  };

  var getCastNames = function(actors){
    var correctNames = actors.map(function(actor){
      return actor.name;
    });

    return(correctNames)
  }

  var getCastNamesRand = function(orderedNames){
    var randNames = shuffleArray(orderedNames);

    var domRandNames = randNames.map(function(name){
      return { 'name': name, 'drag': true}
    })
    return(domRandNames)
  }

  var shuffleArray = function(arr){
    var shuffledArr = [];
    for(var i = arr.length; i > 0; i--){
      if(i>0){
      var ind = randomInd(0, i);
      shuffledArr.push(arr[ind]);
      arr.splice(ind, 1);
    }else{
      shuffledArr.push(arr[0]);
      };
    }
    return shuffledArr;
  };

  var randomInd = function(min,max){
    return( Math.floor(Math.random() * (max - min)) + min );
  };

  function requestFailure(response){
    console.log('in ActorsFactory requestFailure');
    console.log(response);
  }

  return {
    actors: actors,
    requestActors: requestActors,
    getCastNamesRand: getCastNamesRand,
    actorsNames: actorsNames,
    actorsNamesRand: actorsNamesRand
  };

}]);
