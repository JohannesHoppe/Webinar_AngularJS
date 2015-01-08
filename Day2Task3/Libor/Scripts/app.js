define([
    'angular',
    'angular-route',
    'layout/layout',
    'layout/exampleController'
], function (angular) {
    require(['layout/smart-table.min', 'angular-resource'], function () {
        angular.module('app', ['ngRoute', 'ngResource','smart-table', 'layout'])
            .config([
                '$routeProvider', function ($routeProvider) {

                    $routeProvider
                        .when('/', {
                            templateUrl: 'Templates/exampleController.html',
                            controller: 'exampleController'
                        })
                }
            ]);


        require(['domReady!'], function (domReady) {
            angular.bootstrap(domReady, ['app']);
        });
    });
});