define(['angular',
        'layout/layout'], function (angular) {

    angular.module('layout')

        .controller('exampleController', function ($scope) {

            $scope.model = {
                text: 'Hello World'
            }

            $scope.changeText = function () {
                $scope.model.text = "Hello AngularJS";
            }
        });

});