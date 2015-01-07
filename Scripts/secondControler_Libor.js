angular.module('app')
    .controller('secondControler_Libor', function ($scope) {
        $scope.showIFrame = false;

        $scope.setShowIFrame = function () {
            $scope.showIFrame = true;
        }
});