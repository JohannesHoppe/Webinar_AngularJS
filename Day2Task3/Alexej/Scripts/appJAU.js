angular.module('app', ['ngRoute'])

    .config([
        '$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'Templates/exampleControllerJAU.html',
                    controller: 'exampleController'
                })
            .when('/screen1', {
                templateUrl: 'Templates/exampleControllerJAU_2.html',
                controller: 'exampleControllerJAU_2'
            });
        }
    ]);










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