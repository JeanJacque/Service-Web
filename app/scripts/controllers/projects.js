'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', '$location', '$route', function ($scope, $http, $routeParams, $location, $route) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
            .success(function (data) {
                $scope.projects = data.data;
            });

        $scope.remove = function(id) {

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id)
                .success(function () {

                    $location.path('/projects');

                });

        };

        if ($routeParams.projectId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
                .success(function (data) {
                    if (data.status == "success") {
                        $scope.currentProject = data.data;
                    }
                });

            $scope.assignation = function(user, newRole){
                var role = {name: newRole, UserId: user.id, ProjectId:$scope.currentProject.id};
                console.log(role);
                $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role).success(function (data) {
                    $route.reload();
                    });

            }


            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
                .success(function (data) {
                    $scope.users = data.data;
                });

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId + '/Roles')
                .success(function (data) {
                    $scope.currentProjectUsers = data.data;

                });
        }

        $scope.remove = function(id) {

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id)
                .success(function () {

                    $location.path('/projects');

                });

        };
    }]);