angular.module('app')

    .controller('alexejController', function ($scope) {

        $scope.model = {
            text2: 'Detail Page'
        }

        $scope.openIframe = function() {
            $scope.detailFrame = "http://zertifikate.commerzbank.de/Products/ProductDetails.aspx?rp=None&rps=None&c=0&p=462803577&pc=43&dm=NoHeaders&ip=1&pm=Full";
        }
    });