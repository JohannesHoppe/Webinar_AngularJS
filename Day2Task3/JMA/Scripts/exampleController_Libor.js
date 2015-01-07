angular.module('exampleApp', [])

    .controller('exampleController', function ($scope) {
        $scope.model = {
            text: 'Hello World'
        }

        $scope.changeText = function () {
            $scope.model.text = 'Ahoj';
        }
    });