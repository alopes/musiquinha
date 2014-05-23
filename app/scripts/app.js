'use strict';

angular
  .module('musiquinhaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/songs', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      RestangularProvider.setBaseUrl('http://musiquinha-api.herokuapp.com');
      RestangularProvider.setRequestSuffix('.json');
  });
