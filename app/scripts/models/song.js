'use strict';

var app = angular.module('musiquinhaApp');

app.provider('Song', function() {

  this.$get = ['$resource', function($resource) {

    var Song = $resource('http://musiquinha-api.herokuapp.com/songs/:id', {}, {
      // update: { method: 'PUT' },
      // query: { method:'GET', isArray: true },
      // delete: { method:'DELETE', isArray: true }
      // save: { method:'POST', isArray: false }
    });

    return Song;

  }];

});
