define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('layout')
        .controller('exampleController', ['$scope', '$http', function ($scope, $http) {

            $scope.model = {
                text: 'Hello World',
                customers: [],
                UpdateId: null
            }

            $scope.changeText = function() {
                $scope.model.text = "Hello AngularJS";
            }            

            $scope.IsUpdate = function (id) {
                return $scope.model.UpdateId === id;
            }

            $scope.Update = function (id) {
                $scope.model.UpdateId = id;
            }

            $scope.Delete = function (id) {
                $http.delete('http://ex.extjs-kochbuch.de/api/Customer/' + id).
                success(function (data, status, headers, config) {
                        $scope.Get();
                    }).
                error(function (data, status, headers, config) {
                    alert('Error - Delete');
                });
            }

            $scope.Save = function (id, firstName, lastName, mail) {

                $http.put('http://ex.extjs-kochbuch.de/api/Customer/' + id, {
                    Id: id,
                    FirstName: firstName,
                    LastName: lastName,
                    Mail: mail
                }
                ).
                success(function (data, status, headers, config) {
                    // $scope.Get();
                }).
                error(function (data, status, headers, config) {
                    alert('Error - Put');
                });

                $scope.model.UpdateId = null;
                // alert('Saved ' + id);
            }

            $scope.Reset = function () {
                $http.get('http://ex.extjs-kochbuch.de/api/Customer/reset').
                success(function (data, status, headers, config) {
                    $scope.Get();
                }).
                error(function (data, status, headers, config) {
                    alert('Error - Reset');
                });
            }

            $scope.Get = function () {
                $http.get('http://ex.extjs-kochbuch.de/api/Customer').
                success(function (data, status, headers, config) {

                    $scope.model.customers = data.Data;
                }).
                error(function (data, status, headers, config) {
                    alert('Error - Get');
                });
            }

        $scope.Get();


        }])

        .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keyup", function (event) {
                if (event.which === 13) {     // ENTER                              
                    scope.$eval(attrs.ngEnter);                    
                    event.preventDefault();
                }
                else if (event.which === 27) { // ESC 
                    scope.model.UpdateId = null;
                    scope.Get();
                    event.preventDefault();
                }
            });
        };
    });

    ;

});