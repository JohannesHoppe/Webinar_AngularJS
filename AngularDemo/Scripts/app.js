define([
    'angular',
    'angular-route',
    'layout/layout',
    'layout/exampleController',
    'layout/exampleController2',
    'layout/customerDetail',
    'layout/customerService'
], function(angular) {

    angular.module('app', ['ngRoute', 'layout'])
        .config([
            '$routeProvider', function($routeProvider) {

                $routeProvider
                    .when('/', {
                        templateUrl: 'Templates/exampleController.html',
                        controller: 'exampleController'
                    })
                    .when('/screen1', {
                        templateUrl: 'Templates/exampleController2.html',
                        controller: 'exampleController2'
                    })
                    .when('/edit/:customerId', {
                        templateUrl: 'Templates/customerDetail.html',
                        controller: 'customerDetail'
                    })
                    .when('/new', {
                        templateUrl: 'Templates/customerDetail.html',
                        controller: 'customerDetail'
                    });
            }
        ]);


    require(['domReady!'], function (domReady) {
        angular.bootstrap(domReady, ['app']);
    });

});






/*
define(['myFirstModule', 'domReady!'], function (myFirstModule) {

    myFirstModule.setColor("blue");
    myFirstModule.setup();

    // 
    myFirstModule.$events.on("userDidSomething", function (data) {
        alert("hallo" + data);
    });


});
*/