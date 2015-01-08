define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('addCustomerController', ['$scope', '$http','$location', function ($scope, $http,$location) {

            $scope.createCustomer = function (customer) {
                
				// Simple POST request example (passing data) :
				$http.post('http://ex.extjs-kochbuch.de/api/Customer/', angular.toJson(customer)).
				  success(function(data, status, headers, config) {
					$location.path("/");
				  }).
				  error(function(data, status, headers, config) {
						alert("create customer do not work");
				  });				
            }
        }]);

});