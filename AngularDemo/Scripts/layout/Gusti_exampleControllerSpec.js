define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function () {

    describe('exampleController', function () {

        var scope, customerServiceMock;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http) {

            scope = $rootScope.$new();
            var windowMock = { confirm: function () { return true; } };

            customerServiceMock = {
                refreshCustomers: function() {
                    return $http.get();
                },
                deleteCustomer: function(n) {
                    return $http.get();
                }
            }
            spyOn(customerServiceMock, 'deleteCustomer').and.callThrough();

            $controller('exampleController', {
                $scope: scope,
                customerService: customerServiceMock,
                $window: windowMock
            });

        }));


        it('should call the service deleteCustomer', function () {

            scope.deleteCustomer(15);
            expect(customerServiceMock.deleteCustomer).toHaveBeenCalled();
        });
    });

});