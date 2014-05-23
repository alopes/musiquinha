'use strict';

    var app = angular.module('musiquinhaApp');

    app.controller('SongsCtrl', ['$scope', 'player', 'msgBus','Restangular', function ($scope, player, msgBus, Restangular) {

    var baseSongs = Restangular.all('songs');

    baseSongs.getList().then(function(songs) {
      $scope.songs = songs;
    });

    $scope.message = 'Songs';

    $scope.playSong = function(){
      msgBus.emitMsg('player.changed', {'song': this.song});
    };

    $scope.saveSong = function(song) {
      baseSongs.post(song).then(function() {
        baseSongs.getList().then(function(songs) {
          $scope.songs = songs;
        });
      });
    };

    $scope.delete = function(song) {
      song.remove().then(function(){
        _.remove($scope.songs, song);
      });
    };

  }]);

