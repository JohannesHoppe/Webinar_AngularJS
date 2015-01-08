define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    describe('exampleController', function () {

        var scope;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http) {

            scope = $rootScope.$new();
            
            var customerServicMock = {
                refreshCustomers: function() {
                    return $http.get();
                }
            }

            var deleteCustomerMock = {
                deleteCustomer: function (id) {
                    scope.customerId = id;
                    return $http.delete();
                }
            }

            $controller('exampleController', {
                $scope: scope,
                customerService: customerServicMock
            });

        }));


        it('should say hello', function () {
            expect(scope.model.text).toEqual('Hello World');
        });

        it('should call deleteCustomer', function () {
            scope.deleteCustomer(0);
            expect(scope.customerId).toEqual(0);
        });

    });

});