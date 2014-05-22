'use strict';

(function(){

  var app = angular.module('musiquinhaApp');

  app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

    this.changeRoute = function(section){
      $location.path(section);
    };

  }]);

})();
