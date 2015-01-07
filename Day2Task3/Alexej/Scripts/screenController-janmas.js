angular.module('app')

    .controller('screenController-janmas', function ($scope) {

        $scope.model = {
            text: 'Hello World',
            detailsPageVisible: false
        }

        $scope.changeText = function() {
            $scope.model.text = "Hello AngularJS";
        }

        $scope.showDetailsPage = function () {
            $scope.model.detailsPageVisible = true;
        }
    });