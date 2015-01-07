angular.module('app', ['ngRoute'])

    .config([
        '$routeProvider', function($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'Templates/exampleController.html',
                    controller: 'exampleController'
                })
				.when('/screen1', {
                    templateUrl: 'Templates/alexejController.html',
                    controller: 'alexejController'
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