angular.module('app')

    .config(function ($sceProvider) {
        // Completely disable SCE.  For demonstration purposes only!
        // Do not use in new projects.
        $sceProvider.enabled(false);
    })

    .controller('secondControler_Libor', function ($scope) {
        $scope.iframe = {
            show: false,
            url: "http://zertifikate.commerzbank.de/News/News.aspx"
        }

        $scope.setShowIFrame = function () {
            $scope.iframe.show = true;
        }
});