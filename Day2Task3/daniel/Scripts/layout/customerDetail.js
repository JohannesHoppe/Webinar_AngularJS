define([
    'angular',
    'layout/layout'
], function (angular) {

    angular.module('layout')
        .controller('customerDetail', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
            
            var getCustomer = function (customerId) {
                $http.get('http://ex.extjs-kochbuch.de/api/Customer/' + customerId)
                   .success(function (data, status, headers, config) {
                       $scope.model.Customer = data;
                   })
                   .error(function (data, status, headers, config) {
                   });
            }

            var saveCustomer = function (customer) {                
                var method,url;

                if (customer.Id){
                    method = $http.put;
                    url = 'http://ex.extjs-kochbuch.de/api/Customer/' + customer.Id;
                }
                else{
                    method = $http.post;
                    url = 'http://ex.extjs-kochbuch.de/api/Customer/';
                }                
                
                method(url, $scope.model.Customer)
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