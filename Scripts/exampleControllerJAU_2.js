angular.module('app')

    .controller('exampleControllerJAU_2', function ($scope) {

        $scope.model = {
            text: 'TADAAAAAAA'
        }

        $scope.changeText = function () {
            $scope.model.text = "Tramtadada ;-]";
        }
    });