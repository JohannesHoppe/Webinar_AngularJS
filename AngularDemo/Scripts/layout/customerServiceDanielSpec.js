define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

        describe('CRM milestone 1, sprint 20', function () {

            beforeEach(module('layout'));

            describe('As Johannes I want to see a list of customers.', function () {

                describe('customerService', function () {

                    var customerService;

                    beforeEach(inject(function ($http, _customerService_) {

                        customerService = _customerService_;
                        spyOn($http, 'get').and.callThrough();

                    }));

                    it('should call an all GET requests http://ex.extjs-kochbuch.de/api/Customer', inject(function ($http) {
                        customerService.refreshCustomers();
                        expect($http.get).toHaveBeenCalledWith('http://ex.extjs-kochbuch.de/api/Customer');
                    }));
                });
            });
        });
    });