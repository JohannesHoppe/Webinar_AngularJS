define([
    'angular',
    'layout/layout'
], function(angular) {
        
    angular.module('layout')
        .controller('exampleController', ['$scope', 'customerService', function ($scope, customerService) {

            var baseApi = 'http://ex.extjs-kochbuch.de/api/Customer';

            var refreshCustomers = function () {
                customerService.refreshCustomers()
                    .success(function (data, status, headers, config) {
                        $scope.customers = data.Data;
                    })
                    .error(function (data, status, headers, config) {
                    });               
            }

            var deleteCustomer = function (customerId) {
                customerService.deleteCustomer(customerId)
                    .success(function (data, status, headers, config) {
                        if (status == 200) {
                            refreshCustomers();
                        }                    
                    })
                    .error(function (data, status, headers, config) {
                    });
            }

            $scope.model = {
                text: 'Hello World'
            }

            $scope.changeText = function() {
                $scope.model.text = "Hello AngularJS";
            }

            $scope.deleteCustomer = function (customerId) {
                if (confirm("Are you sure you wanna delete this guy?"))
                    deleteCustomer(customerId);
            }

            refreshCustomers();
            


        }]);

});