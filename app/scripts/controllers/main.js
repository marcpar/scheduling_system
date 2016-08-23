'use strict';

/**
 * @ngdoc function
 * @name schedulingSystemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schedulingSystemApp
 */
 angular.module('schedulingSystemApp')
 .controller('MainCtrl', function ($scope, $firebaseObject) {
 	var ref = new Firebase("https://schedulingsystem-760c6.firebaseio.com");  
 	$scope.data = $firebaseObject(ref);


 	


 });
