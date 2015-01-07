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

            $scope.loadCurrentCustomer = function () {
                $http.get(webApiURL + $scope.model.customerId)
                    .success(function (data, status, headers, config) {
                        $scope.model.customer = data;
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
                $http.put(webApiURL + $routeParams.customerId,$scope.model.customer)
                    .success(function (data, status, headers, config) {
                        alert('Customer has been successfully deleted!.... sorry this is copy$paste error. His data has been updated.');
                    })
                    .error(function (data, status, headers, config) {
                        alert('Oups... some error has occured.' + data)
                    });
            }


        }]);

});