'use strict';

/**
 * @ngdoc function
 * @name schedulingSystemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schedulingSystemApp
 */
angular.module('schedulingSystemApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var ref = new Firebase("https://burning-torch-4263.firebaseio.com/days");  
  var fb = $firebase(ref);
  });
