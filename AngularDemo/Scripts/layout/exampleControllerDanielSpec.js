define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    describe('exampleController', function () {

        var scope, customerServicMock;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http) {

            scope = $rootScope.$new();            
            
            customerServicMock = {
                refreshCustomers: function() {
                    return $http.get();
                },
                deleteCustomer: function(id) {
                    return $http.get();
                }
            }

            var windowMock = {
                confirm: function () {
                    return true;
                }                
            }

            var ctrl = $controller('exampleController', {
                $scope: scope,
                customerService: customerServicMock,
                $window: windowMock
            });

            spyOn(customerServicMock, 'deleteCustomer').and.returnValue($http.get());
            scope.deleteCustomer(1);
        }));


        it('should say hello', function () {
            expect(scope.model.text).toEqual('Hello World');
        });

        it("should call customerService.deleteCustomer", function () {
            expect(customerServicMock.deleteCustomer).toHaveBeenCalled();
        });

        it("should call delete customer with value 1", function () {
            expect(customerServicMock.deleteCustomer).toHaveBeenCalledWith(1);
            
        });
    });

});