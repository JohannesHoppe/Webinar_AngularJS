angular.module('app')

    .controller('exampleController', function ($scope) {

        $scope.model = {
            text: 'Hello World'
        }

        $scope.changeText = function () {
            $scope.model.text = "Hello AngularJS";
        }
    });