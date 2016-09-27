angular.module('myApp')
  .controller('myController', [
    '$scope',
    '$animate', 
    'mainCharacter', 
    'CharacterVersionFactory', 
    'BookService', 
    'Movies',
    function ($scope, $animate, mainCharacter, CharacterVersionFactory, BookService, Movies) {
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
  }]).controller('booksController', [
      '$scope',
      'BookService',
      function ($scope, BookService) {
        $scope.BookService = BookService;
      }
  ]).controller('moviesController', [
      '$scope',
      'Movies',
      function ($scope, Movies) {
        $scope.movies = [];
        Movies.getMovies()
          .then(response => {
            $scope.movies = response.data;
        })
      }
  ]).controller('otherController', [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    function ($scope, mainCharacter, CharacterVersionFactory) {
      $scope.myFirstName = 'Pooped';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.characterVersion = CharacterVersionFactory;
      }
  ]);