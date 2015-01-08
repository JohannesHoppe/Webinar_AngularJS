define([
    'angular',
    'angular-mocks',
    'layout/customerService'], function (sut) {

        describe('CRM milestone 1, sprint 20', function () {

            describe('As Johannes I want to see a list of customer.', function() {

                describe('customerService', function () {

                    beforeEach(module('layout'));

                    afterEach(inject(function ($httpBackend) {
                        $httpBackend.verifyNoOutstandingExpectation();
                        $httpBackend.verifyNoOutstandingRequest();
                    }));


                    it('should call an all GET requests http://ex.extjs-kochbuch.de/api/Customer', inject(function (customerService, $httpBackend) {
                        
                        expect(customerService).toBeDefined();
                        $httpBackend.expectGET('http://ex.extjs-kochbuch.de/api/Customer').respond("ok");
                        customerService.refreshCustomers();                        
                        $httpBackend.flush();
                    }));
                });

            });


    });
});