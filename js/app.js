// Create a new module and declare dependencies.
var app = angular.module('app', ['ngRoute', 'app.controllers']);

// route configurations
app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    
    $routeProvider.
        when('/', {
            templateUrl: 'partials/view1.html',
            controller: 'View1Ctrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);