'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('AssignationCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
            .success(function (data) {
                $scope.projects = data.data;
            });

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function (data) {
                $scope.users = data.data;
            });
    }]);
