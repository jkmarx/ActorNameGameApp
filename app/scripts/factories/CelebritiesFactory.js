'use strict';

angular.module('NameGameApp').factory('CelebritiesFactory', ['$http', 'ServerUrl', function($http, ServerUrl){

  var celebrities = [];

  var requestCelebrities = function() {
    var params = {
      id: "0110357"
    }
    return $http.post(ServerUrl + '/movies/cast', params).then(function(response) {
      console.log(response.data);
       debugger;
      angular.copy(response.data, celebrities);
    }, requestFailure);
  };

  function requestFailure(response){
    console.log('in CelebritiesFactory requestFailure');
    console.log(response);
  }

  return {
    celebrities: celebrities,
    requestCelebrities: requestCelebrities
  };

}]);
