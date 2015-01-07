angular.module('app')
    .controller('secondControler_Libor', function ($scope) {
        $scope.iframe = {
            show: false,
            url: "http://zertifikate.commerzbank.de/News/News.aspx"
        }

        $scope.setShowIFrame = function () {
            $scope.iframe.show = true;
        }
});