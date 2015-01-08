define([
    'angular',
    'angular-mocks',
    'layout/customerService'], function (sut) {

        describe('CRM milestone 1, sprint 20', function () {

            describe('As Johannes I want to see a list of customer.', function() {

                ddescribe('customerService', function () {

                    var $httpBackend;

                    beforeEach(module('layout'));

                    beforeEach(inject(function($injector) {

                        $httpBackend = $injector.get('$httpBackend');

                    }));

                    afterEach(function () {
                        $httpBackend.verifyNoOutstandingExpectation();
                        $httpBackend.verifyNoOutstandingRequest();
                    });


                    it('should call an all GET requests http://ex.extjs-kochbuch.de/api/Customer', inject(function (customerService) {
                        // expect(false).toEqual(false);
                        expect(customerService).toBeDefined();
                        $httpBackend.expectGET('http://ex.extjs-kochbuch.de/api/Customer').respond("ok");
                        customerService.refreshCustomers();                        
                        $httpBackend.flush();

                    }));
                });

            });


    });
});