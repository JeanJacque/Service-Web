'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('UsersCtrl', ['$scope', '$http', '$routeParams', '$location', '$route', function ($scope, $http, $routeParams, $location, $route) {
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

            $scope.assignation = function(project, newRole){
                    var role = {name: newRole, UserId: $scope.currentUser.id, ProjectId:project.id};
                    $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', role).success(function (data) {
                        $route.reload();
                    });

            }

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
                .success(function (data) {
                    $scope.projects = data.data;
                });

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Roles')
                .success(function (data) {
                    $scope.currentUserProjects = data.data;

                });
        }
    }]);
