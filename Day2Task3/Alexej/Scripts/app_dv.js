angular.module('app', ['ngRoute'])

    .config([
        '$routeProvider', function ($routeProvider) {
            debugger;
            $routeProvider
               .when('/', {
                   templateUrl: 'Templates/exampleController.html',
                   controller: 'exampleController'
               })
                .when('/screen1', {
                    templateUrl: 'Templates/exampleController_daniel.html',
                    controller: 'exampleControllerDV'
                });

        }
    ]);
