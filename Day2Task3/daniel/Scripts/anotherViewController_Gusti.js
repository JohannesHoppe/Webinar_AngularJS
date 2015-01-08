angular.module('app')

    .controller('anotherViewController', function ($scope) {
        $scope.showIframe = false;
        $scope.switchVisibility = function () {
            $scope.showIframe = !$scope.showIframe;
        }
    });