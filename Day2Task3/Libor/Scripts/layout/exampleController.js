define([
    'angular',
    'layout/layout',
    'layout/resourceService'
], function(angular) {

    angular.module('layout')
        .controller('exampleController', ['$scope', '$http', '$resource', function ($scope, $http, $resource, Customer) {
            var Customer = $resource('http://ex.extjs-kochbuch.de/api/Customer', { id: '@_id' },
                {
                    'query': { method: 'GET', url: 'http://ex.extjs-kochbuch.de/api/Customer', isArray: false }
                });

            $scope.refresh = function () {
                $http({
                    url: 'http://ex.extjs-kochbuch.de/api/Customer',
                    method: "GET"
                }).success(function (data, status, headers, config) {
                    $scope.customers = data.Data;
                    nextID();
                }).
                    error(function (data, status, headers, config) {
                        alert("Error while refreshing customers.");
                    })
            };
            $scope.refresh();

            $scope.deleteCustomer = function (customer) {
                if (confirm("Would you like to remove customer " + customer.FirstName + " " + customer.LastName + "?")) {
                    $http({
                        url: 'http://ex.extjs-kochbuch.de/api/Customer',
                        method: "DELETE",
                        params: { id: customer.Id}
                    }).success(function (data, status, headers, config) {
                        $scope.refresh();
                    }).
                    error(function (data, status, headers, config) {
                        alert(status);
                    });
                }
            }

            $scope.reset = function () {
                if (confirm("Would you like to reset the in-memory demo data to its initial state?")) {
                    $http({
                        url: 'http://ex.extjs-kochbuch.de/api/Customer/reset',
                        method: "GET"
                    }).success(function (data, status, headers, config) {
                        $scope.refresh();
                    }).
                    error(function (data, status, headers, config) {
                        alert('Reset was unsuccessful.');
                    });
                }
            }

            $scope.updateCustomer = function (customer) {
                customer.$edit = false;
                $http({
                    url: 'http://ex.extjs-kochbuch.de/api/Customer',
                    params: { id: customer.Id},
                    method: "PUT",
                    data: customer
                }).success(function (data, status, headers, config) {
                    $scope.refresh();
                }).
                error(function (data, status, headers, config) {
                    alert('Add was unsuccessful.');
                });
            }
            
            $scope.addCustomer = function (newCustomer) {
                newCustomer.Id = nextID();
                $http({
                    url: 'http://ex.extjs-kochbuch.de/api/Customer',
                    method: "POST",
                    data: newCustomer
                }).success(function (data, status, headers, config) {
                    $scope.addNew = false;
                    $scope.newCustomer = null;
                    $scope.refresh();
                }).
                error(function (data, status, headers, config) {
                    alert('Add was unsuccessful.');
                });
            }

            var nextID = function () {
                var maxID = -1;
                for (var customerID in $scope.customers) {
                    if (customerID > maxID)
                        maxID = customerID;
                }

                return maxID + 1;
            }
        }]);
});