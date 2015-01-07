define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('customerListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

            $scope.model = {
                text: 'Hello World'
            }

            $scope.changeText = function() {
                $scope.model.text = "Hello AngularJS";
            }

            $scope.gotoCustomerDetail = function (id) {
                $location.path('/detail/' + id)
            }


            $http.get('http://ex.extjs-kochbuch.de/api/Customer').
                success(function(data, status, headers, config) {

                    $scope.customers = data.Data;
                }).
                error(function(data, status, headers, config) {
                });


        }]);

});