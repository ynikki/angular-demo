'use strict';

angular.module('myApp', ['ngRoute', 'ngAnimate'])
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
        })
        .when('/404', {
          templateUrl: 'views/404.html'
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