// Create a new module.
var controllers = angular.module('app.controllers', []);

controllers.controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
	'use strict';

	$scope.send = function (param) {     
        $http.get('http://192.168.0.22:3000/led', {params: {command: param}})
        .success(function () {
            alert('Command sent. Check your rpi!');
            
        }).error(function () {
            alert('Error. Please try again.');
        });
    };
}]);