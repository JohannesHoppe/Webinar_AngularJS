define([
    'angular',
    'angular-mocks',
    'layout/customerService'], function (sut) {

        describe('customerService', function () {


            var scope, customerServiceMock;
            var modalDialog;

            beforeEach(module('layout'));

            beforeEach(inject(function ($rootScope, $controller, $http) {

                scope = $rootScope.$new();

                customerServicMock = {
                    refreshCustomers: function () {
                        return $http.get();
                    }
                }

                $controller('exampleController', {
                    $scope: scope,
                    customerService: customerServicMock
                });

            }));

            it('should call $http.get in get', inject(function (customerService, $http) {
                spyOn($http, 'get');
                customerService.refreshCustomers();
                expect($http.get).toHaveBeenCalledWith("http://ex.extjs-kochbuch.de/api/Customer");
            }));


        });

    });