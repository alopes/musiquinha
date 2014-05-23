'use strict';



  var app = angular.module('musiquinhaApp');

  app.controller('PlayerCtrl', ['$scope', 'player', 'msgBus', function ($scope, player, msgBus) {

    $scope.song = {};

    msgBus.onMsg('player.changed', function(event, data) {
      // console.log(event);
      // console.log(data);
      $scope.isActive = true;
      $scope.song.title = 'Title: ' + data.song.title;
      $scope.song.cover = data.song.cover;

    }, $scope);

  }]);


