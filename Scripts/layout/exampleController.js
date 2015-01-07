define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('exampleController', ['$scope', '$http', function ($scope, $http) {

            $scope.model = {
                text: 'Hello World'
            }

            $scope.changeText = function() {
                $scope.model.text = "Hello AngularJS";
            }


            $http.get('http://ex.extjs-kochbuch.de/api/Customer').
                success(function(data, status, headers, config) {

                    $scope.customers = data.Data;
                }).
                error(function(data, status, headers, config) {
                });


        }]);

});