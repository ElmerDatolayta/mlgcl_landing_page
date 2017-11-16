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
        })
        .state('event', {
            url: '/event',
            templateUrl: 'assets/app/template/event.html'
        })
        .state('course', {
            url: '/course',
            templateUrl: 'assets/app/template/course.html'
        })
        .state('instructor', {
            url: '/instructor',
            templateUrl: 'assets/app/template/instructor.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'assets/app/template/contact.html'
        })
        .state('admission', {
            url: '/admission',
            templateUrl: 'assets/app/template/admission.html'
        });
    
        $qProvider.errorOnUnhandledRejections(false);
    }]);

app.controller('appController',['$scope','appService','$location',function ($scope,appService,$location){
    $scope.carousel = {};
    $scope.carousel.navigation = function(identity,slickAction){
        $(identity).slick(slickAction);
    }
}]);

app.factory('appService',['$http',function ($http){
    var factory = {};

    return factory;
}]);