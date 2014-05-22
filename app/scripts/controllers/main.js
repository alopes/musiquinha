'use strict';

var app = angular.module('musiquinhaApp');

app.factory('msgBus', ['$rootScope', function($rootScope) {
    var msgBus = {};
    msgBus.emitMsg = function(msg, data) {
        data = data || {}
        $rootScope.$emit(msg, data);
    };
    msgBus.onMsg = function(msg, func, scope) {
        var unbind = $rootScope.$on(msg, func);
        if (scope) {
            scope.$on('$destroy', unbind);
        }
    };
    return msgBus;
}]);


app.service('player', [function () {

  var playing = false;

  return {
      start : function() {
          playing = true;
      },
      stop : function() {
          playing = false;
      },
      isPlaying : function() {
          return playing;
      }
  };

}]);

app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

  this.changeRoute = function(section){
    $location.path(section);
  };

}]);

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.message = 'Main';
}]);

app.controller('SongsCtrl', ['$scope', 'player', 'msgBus', function ($scope, player, msgBus) {

  $scope.message = 'Songs';
  $scope.songs = app.songs;

  $scope.playSong = function(){
    msgBus.emitMsg('player.changed', {'song': this.song});
  };

}]);

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

app.songs = [
  {title:'foobar', cover: '//i1.sndcdn.com/artworks-000080064064-70urpi-t500x500.jpg'},
  {title:'lolwat', cover: '//i1.sndcdn.com/artworks-000079955535-ev0g3t-t500x500.jpg?30a2558'},
  {title:'dfsfdsfds', cover: '//i1.sndcdn.com/artworks-000079282662-cctjup-t500x500.jpg?30a2558'},
  {title:'fhtrh', cover: '//i1.sndcdn.com/artworks-000079521520-z4xodd-t500x500.jpg?30a2558'},
  {title:'5ghg', cover: '//i1.sndcdn.com/artworks-000079522528-q7gq4p-t500x500.jpg?30a2558'},
];
