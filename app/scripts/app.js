'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
        .when('/users/:userId', {
            templateUrl: 'views/Users/show.html',
            controller: 'UsersCtrl'
        })
        .when('/projects/:projectId', {
            templateUrl: 'views/Projects/show.html',
            controller: 'ProjectsCtrl'
        })
        .when('/add', {
            templateUrl: '../views/add.html',
            controller:'AddCtrl'
        })
        .when('/projects', {
            templateUrl: 'views/Projects/list.html',
            controller:'ProjectsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
