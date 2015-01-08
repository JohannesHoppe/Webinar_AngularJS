define([
    'angular',
    'layout/layout'
], function (angular) {

    angular.module('layout')
        .controller('customerDetail', ['$scope', '$http', '$routeParams', '$location', 'customerService', function ($scope, $http, $routeParams, $location, customerService) {
            
            var getCustomer = function (customerId) {
                customerService.getCustomer(customerId)
                    .success(function (data, status, headers, config) {
                        $scope.model.Customer = data;
                    })
                    .error(function (data, status, headers, config) {
                    });
            }

            var saveCustomer = function (customer) {

                customerService.saveCustomer(customer)
                    .success(function (data, status, headers, config) {
                        $location.url("/");
                    })
                    .error(function (data, status, headers, config) {
                    });               
            }

            $scope.model = {};

            $scope.submitForm = function () {                

                if (!$scope.formController.$valid) {
                    return;
                }
                saveCustomer($scope.model.Customer);
            };

            if ($routeParams.customerId) {
                 getCustomer($routeParams.customerId);
            }
            else {
                $scope.model.Customer = { FirstName: "", LastName: "", Mail: "" };
            }


            
        }]);

});