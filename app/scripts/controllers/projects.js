'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
            .success(function (data) {
                $scope.projects = data.data;
            });

        if ($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function (data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });
        }
    }]);
