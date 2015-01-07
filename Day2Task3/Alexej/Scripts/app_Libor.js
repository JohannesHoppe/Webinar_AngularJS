angular.module('app', ['ngRoute'])

    .config([
        '$routeProvider', function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'Templates/exampleController_Libor.html',
                    controller: 'exampleController'
                })
                .when('/secondTemplate', {
                    templateUrl: 'Templates/secondControler_Libor.html',
                    controller: 'secondControler_Libor'
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