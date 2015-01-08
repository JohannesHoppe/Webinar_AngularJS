define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')

        .controller('exampleController2', function ($scope) {

            $scope.showIframe = false;

            $scope.switchVisibility = function () {
                $scope.showIframe = !$scope.showIframe;
            }
        });

});