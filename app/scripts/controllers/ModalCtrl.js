'use strict';
angular.module('NameGameApp')
  .controller('ModalCtrl', ModalCtrl);

ModalCtrl.$inject = ['$scope', '$modal', '$log', 'MoviesFactory'];
function ModalCtrl($scope, $modal, $log, MoviesFactory){

  $scope.movies = MoviesFactory.movies;

  var movie = {};
  movie.id = '0110357';
  movie.title = 'The Lion King';

  MoviesFactory.requestMovies(movie).then(function(response){
    $scope.movies = MoviesFactory.movies;
  });

  $scope.open = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'movieOptions.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        movies: function () {
          return $scope.movies;
        }
      }
    });

    modalInstance.result.then(function (selectedMovie) {
      $scope.selected = selectedMovie;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

angular.module('NameGameApp')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

ModalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'movies'];

function ModalInstanceCtrl($scope, $modalInstance, movies){
  $scope.movies = movies;
  $scope.selected = {
    movie: $scope.movies[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.movie);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
