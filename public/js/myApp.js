'use strict';

angular.module('myApp', ['ngRoute'])
  .config([
    'MoviesProvider',
    '$routeProvider',
    '$locationProvider',
    function (MoviesProvider, $routeProvider, $locationProvider){
      MoviesProvider.setEndpoint('/api/movies');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .when('/books', {
          templateUrl: 'views/books.html',
          controller: 'booksController'
        })
        .when('/movies', {
          templateUrl: 'views/movies.html',
          controller: 'moviesController'
        })
        .when('/other', {
          templateUrl: 'views/other.html',
          controller: 'myController'
        });
    }
  ])
  .run([
    '$rootScope',
    'APP_VERSION',
    function($rootScope, APP_VERSION){
      $rootScope.APP_VERSION = APP_VERSION;
    }
  ]);
/// Google optimizes javascript.
/// dependency in our scope called $scope.
/// setting up the things that you want to inject.
/// controller placed on an element.