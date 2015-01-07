define([
    'angular',
    'angular-route',
    'layout/layout',
    'layout/customerDetailController',
    'layout/customerListController'
], function(angular) {

    angular.module('app', ['ngRoute', 'layout'])
        .config([
            '$routeProvider', function($routeProvider) {

                $routeProvider
                    .when('/', {
                        templateUrl: 'Templates/customerList.html',
                        controller: 'customerListController'
                    })
                    .when('/detail/:customerId', {
                        templateUrl: 'Templates/customerDetail.html',
                        controller: 'customerDetailController'
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