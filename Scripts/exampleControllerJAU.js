angular.module('exampleApp', [])

    .controller('exampleController', function ($scope) {

        $scope.model = {
            text: 'Hello World'
        }

        $scope.changeTitle = function () {
            $scope.model.text = "Hello Austy!";
        }
    });