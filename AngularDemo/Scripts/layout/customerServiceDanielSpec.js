define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

        describe('CRM milestone 1, sprint 20', function () {

            beforeEach(module('layout'));

            describe('As Johannes I want to see a list of customers.', function () {

                describe('customerService', function () {

                    var customerServiceSUT;

                    beforeEach(inject(function ($http, customerService) {
                        customerServiceSUT = customerService;
                        spyOn($http, 'get').and.callThrough();

                    }));

                    xit('should call an all GET requests http://ex.extjs-kochbuch.de/api/Customer', function () {                        
                        customerServiceSUT.refreshCustomers();
                        expect($http.get).toHaveBeenCalledWith('http://ex.extjs-kochbuch.de/api/Customer');

                    });
                });

            });


        });
    });