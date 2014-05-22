'use strict';

(function(){

  var app = angular.module('musiquinhaApp');

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

})();
