'use strict';

(function(){

  var app = angular.module('musiquinhaApp');

  app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.message = 'Main';
  }]);

  app.songs = [
    {title:'foobar', cover: '//i1.sndcdn.com/artworks-000080064064-70urpi-t500x500.jpg'},
    {title:'lolwat', cover: '//i1.sndcdn.com/artworks-000079955535-ev0g3t-t500x500.jpg?30a2558'},
    {title:'dfsfdsfds', cover: '//i1.sndcdn.com/artworks-000079282662-cctjup-t500x500.jpg?30a2558'},
    {title:'fhtrh', cover: '//i1.sndcdn.com/artworks-000079521520-z4xodd-t500x500.jpg?30a2558'},
    {title:'5ghg', cover: '//i1.sndcdn.com/artworks-000079522528-q7gq4p-t500x500.jpg?30a2558'},
  ];

})();
