angular.module('app')

    .controller('exampleControllerDV', function ($scope) {

        $scope.model = {
            text: 'Hello World',
			changeText: function(){
				$scope.model.text='Hello to you too!';						
			}
        }
				
    });