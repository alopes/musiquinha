'use strict';

(function(){

    var app = angular.module('musiquinhaApp');

    app.controller('SongsCtrl', ['$scope', 'player', 'msgBus', function ($scope, player, msgBus) {

    $scope.message = 'Songs';
    $scope.songs = app.songs;

    $scope.playSong = function(){
      msgBus.emitMsg('player.changed', {'song': this.song});
    };

  }]);

})();
