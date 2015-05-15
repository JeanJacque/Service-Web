'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', 'filterFilter', function ($scope, $http, $routeParams, filterFilter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $scope.master = {};

        $scope.update = function(user) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', $scope.user)
            .success(function(data) {

                $scope.go('/users/' + data.data.id);

            });
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.greeting = '';

        $scope.filteredArray = filterFilter($scope.users, greeting);


        $scope.reset();

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }
  }]);
