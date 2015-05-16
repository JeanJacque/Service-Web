'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('UsersCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.update = function (user) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', user)
                .success(function (data) {
                    $location.path('/users/' + data.data.id);
                });
        };

        $scope.remove = function(id) {

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id)
                .success(function () {

                    $location.path('/users');

                });

        };

        $scope.getProjects = function(id) {



        };

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function (data) {
                $scope.users = data.data;
            });



        if ($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function (data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });

            $http.getProject('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id + '/Roles')
                .success(function (data) {
                    $scope.currentUserProjects = data.data;

                });
        }
    }]);
