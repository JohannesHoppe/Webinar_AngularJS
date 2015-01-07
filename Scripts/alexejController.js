angular.module('exampleApp', [])

    .controller('alexejController', function ($scope) {

        $scope.model = {
            text: 'Hello World'
        }
		$scope.buttonText = 'Click';
		
		$scope.changeText = function(){
			$scope.buttonText = 'Click done!';
		}
    });