angular.module('app', ['ngRoute'])

    .config([
        '$routeProvider', function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'Templates/exampleController.html',
                    controller: 'exampleController'
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