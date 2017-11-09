'use strict';

var app = angular.module('MLGWebsite',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider','$qProvider',function($stateProvider,$urlRouterProvider,$qProvider) {
    
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            return $state.go('home');
        });
    
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'assets/app/template/main.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'assets/app/template/about.html'
        });
    
        $qProvider.errorOnUnhandledRejections(false);
    }]);

app.controller('appController',['$scope','appService',function ($scope,appService){
    
}]);

app.factory('appService',['$http',function ($http){
    var factory = {};

    return factory;
}]);