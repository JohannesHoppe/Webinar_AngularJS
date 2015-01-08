define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')

        .controller('customerDetailController', ['$scope', '$routeParams', '$http', '$location', function ($scope, $routeParams, $http, $location) {

            var webApiURL = 'http://ex.extjs-kochbuch.de/api/Customer/';

            $scope.model = {
                customer: null,
                customerId: $routeParams.customerId,
                isUserEdited: false
            };

            var newCustomer = function () {
                $scope.model.isUserEdited = true;
                $scope.model.customerId = null;
                $scope.model.customer = {
                    Id: null,
                    FirstName: '',
                    LastName: '',
                    Mail: ''
                }
            }

            $scope.loadCurrentCustomer = function () {

                if ($scope.model.customerId < 1) {
                    newCustomer();
                    return;
                }

                $http.get(webApiURL + $scope.model.customerId)
                    .success(function (data, status, headers, config) {
                        $scope.model.customer = data;
                        if (!data) {
                            newCustomer();
                        };
                    })
                    .error(function (data, status, headers, config) {
                        alert('Oups... some error has occured.' + data)
                    });

            };

            $scope.deleteCustomer = function () {
                $http.delete(webApiURL + $routeParams.customerId)
                    .success(function (data, status, headers, config) {
                        alert('Customer has been successfully deleted!');
                        $location.path('/');
                    })
                    .error(function (data, status, headers, config) {
                        alert('Oups... some error has occured.' + data)
                    });
            }

            $scope.saveCustomer = function () {
                if (!$scope.model.customer.Id) {
                    post($scope.model.customer);
                }
                else {
                    put($routeParams.customerId, $scope.model.customer);
                }
            }

            var put = function (id, customer) {
                $http.put(webApiURL + id, customer)
                    .success(function (data, status, headers, config) {
                        alert('Put OK');
                    })
                    .error(function (data, status, headers, config) {
                        alert('Oups... some error has occured.' + data)
                    });
            }

            var post = function (customer) {
                $http.post(webApiURL, customer)
                    .success(function (data, status, headers, config) {
                        alert('Posted OK');
                    })
                    .error(function (data, status, headers, config) {
                        alert('Oups... some error has occured.' + data)
                    });
            }


        }]);

});