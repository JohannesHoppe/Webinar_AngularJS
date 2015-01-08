define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('exampleController', ['$scope', '$http', '$resource', function ($scope, $http, $resource) {
            $scope.refresh = function () {
                $http({
                    url: 'http://ex.extjs-kochbuch.de/api/Customer',
                    method: "GET"
                }).success(function (data, status, headers, config) {
                    $scope.customers = data.Data;
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
                    alert('Add was successful.');
                    $scope.refresh();
                }).
                   error(function (data, status, headers, config) {
                       alert('Add was unsuccessful.');
                   });
            }
            
            $scope.displayedCollection = [].concat($scope.customers);

            $scope.addCustomer = function (newCustomer) {
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
        }]);
});