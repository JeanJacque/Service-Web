'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
    .controller('AddCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.updateUser = function (user) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', user)
                .success(function (data) {
                    $location.path('/users/' + data.data.id);
                });
        };
    }]);
