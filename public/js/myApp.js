var myApp = angular.module('myApp', [])
  .run(['$rootScope', 'APP_VERSION', function ( $rootScope, APP_VERSION) {
    $rootScope.APP_VERSION = APP_VERSION;
  }]);
/// Google optimizes javascript.
/// dependency in our scope called $scope.
/// setting up the things that you want to inject.
/// controller placed on an element.