angular.module('exampleApp')

    .controller('buttonController', function ($scope) {

    $scope.model = {
        buttonCaption: "Test"
    };
            
    $scope.changeCaption = function() {
        $scope.model.buttonCaption = "Changed";
    };

});