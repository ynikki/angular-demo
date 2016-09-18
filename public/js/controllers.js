angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', 'Movies',
    function ($scope, mainCharacter, CharacterVersionFactory, BookService, Movies) {
      $scope.myFirstName = 'Pooped';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.characterVersion = CharacterVersionFactory;
      // $scope.books = BookService.getBooks();
      $scope.BookService = BookService;
      $scope.movies = [];
      Movies.getMovies()
        .then(response => {
          $scope.movies = response.data;
        });
  }]);
