define([
    'angular',
    'angular-mocks',
    'layout/customerService'], function (sut) {

        describe('customerService', function () {

            
            beforeEach(module('layout'));

            it('should call $http.get in get', inject(function (customerService, $http) {
                spyOn($http, 'get');
                customerService.refreshCustomers();
                expect($http.get).toHaveBeenCalledWith("http://ex.extjs-kochbuch.de/api/Customer");
            }));


        });

    });