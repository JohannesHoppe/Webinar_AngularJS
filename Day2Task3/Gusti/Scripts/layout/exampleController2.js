define([
    'angular',
    'toastr',
    'layout/layout'
], function(angular, toastr) {

    angular.module('layout')

        .controller('exampleController2', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
            $http.get('http://ex.extjs-kochbuch.de/api/Customer/'+$routeParams.id).
                    success(function (data, status, headers, config) {
                        $scope.customer = data;
                    }).
                    error(function () {
                        toastr.info("New Customer!");
                    });

            $scope.save = function (isValid) {
                if (isValid) {
                    var customer = $scope.customer;
                    if (customer.Id) {
                        $http.put('http://ex.extjs-kochbuch.de/api/Customer/' + $routeParams.id, angular.toJson(customer)).
                        success(function (data, status, headers, config) {
                            toastr.success("Customer updated.");
                        }).
                        error(function (data, status, headers, config) {
                            toastr.error("Customer NOT updated!");
                        });
                    } else {
                        $http.post('http://ex.extjs-kochbuch.de/api/Customer', angular.toJson(customer)).
                        success(function (data, status, headers, config) {
                            toastr.success("Customer saved.");
                        }).
                        error(function (data, status, headers, config) {
                            toastr.error("Customer NOT saved!");
                        });
                    }
                } else {
                    toastr.error("Please correct the validation errors first.");
                }
            }
        }]);

});