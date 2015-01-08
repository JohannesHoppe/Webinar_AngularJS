define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('editCustomerController', ['$scope', '$http','$location','$routeParams', function ($scope, $http, $location, $routeParams) {

		    $http.get('http://ex.extjs-kochbuch.de/api/Customer/'+$routeParams.id).
                success(function(data, status, headers, config) {
                    $scope.customer = data;
                }).
                error(function(data, status, headers, config) {
                });
				
            $scope.editCustomer = function (customer) {
                
				// Simple POST request example (passing data) :
				$http.put('http://ex.extjs-kochbuch.de/api/Customer/'+$routeParams.id, angular.toJson(customer)).
				  success(function(data, status, headers, config) {
					$location.path("/");
				  }).
				  error(function(data, status, headers, config) {
						alert("edit customer do not work");
				  });				
            }
        }]);

});