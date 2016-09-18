angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', function ($scope, mainCharacter, CharacterVersionFactory) {
    $scope.myFirstName = 'Pooped';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
  }]);
