define([
    'angular',
    'angular-route',
    'angular-resource',
    'bootstrap',
    'uibootstrap',
    'layout/layout',
    'layout/exampleController',
    'layout/exampleController2'
], function (angular) {

    angular.module('app', ['ngRoute', 'ngResource', 'layout'])
        .config(['$routeProvider', function ($routeProvider) {

                $routeProvider
                    .when('/', {
                        templateUrl: 'Templates/exampleController.html',
                        controller: 'exampleController'
                    })
                    .when('/add', {
                        templateUrl: 'Templates/exampleController2.html',
                        controller: 'exampleController2'
                    })
                    .when('/edit/:id', {
                        templateUrl: 'Templates/exampleController2.html',
                        controller: 'exampleController2'
                    });
            }
        ])
    .factory("customerResource", ["$resource", function ($resource) {
        return $resource("http://ex.extjs-kochbuch.de/api/Customer/:id", {}, {
            query: {
                method: "GET", isArray: true, transformResponse: function (data, headersGetter) {
                    return angular.fromJson(data).Data;
                }
            }
        })
    }]);


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