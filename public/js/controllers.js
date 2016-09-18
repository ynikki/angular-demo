angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', function ($scope, mainCharacter) {
    $scope.myFirstName = 'Pooped';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
  }]);
