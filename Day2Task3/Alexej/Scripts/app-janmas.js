angular.module('app', ['ngRoute'])

    .config([
        '$routeProvider', function($routeProvider) { // test

        $routeProvider
            .when('/', {
                templateUrl: 'Templates/exampleController-janmas.html',
                controller: 'exampleController'
            })
            .when('/screen1', {
                templateUrl: 'Templates/screenController-janmas.html',
                controller: 'screenController-janmas'
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