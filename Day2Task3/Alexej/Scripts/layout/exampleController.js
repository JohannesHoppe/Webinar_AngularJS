define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('exampleController', ['$scope', '$http','$location', function ($scope, $http,$location) {

            $scope.model = {
                text: 'Hello CRUD'
            }

			$scope.addCustomer = function() {
                $location.path("/addCustomer");
            }
			
			$scope.editCustomer = function(id) {
                $location.path("/editCustomer/"+id);
            }

			$scope.removeCustomer = function(id) {
                if (confirm('Are you sure you want to delete customer with id:'+id+' from the database?')) {
					//remove
					$http.delete('http://ex.extjs-kochbuch.de/api/Customer/' + id)  
					//refresh
					$http.get('http://ex.extjs-kochbuch.de/api/Customer').
						success(function(data, status, headers, config) {

							$scope.customers = data.Data;
						}).
						error(function(data, status, headers, config) {
						});

				} 
							
            }
			
            $http.get('http://ex.extjs-kochbuch.de/api/Customer').
                success(function(data, status, headers, config) {

                    $scope.customers = data.Data;
                }).
                error(function(data, status, headers, config) {
                });


        }]);

});