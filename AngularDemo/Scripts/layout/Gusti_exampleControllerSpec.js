define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    describe('exampleController', function () {

        var scope;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http) {

            scope = $rootScope.$new();
            var window = { confirm: function () { return true } };
            var customerServiceMock = {
                refreshCustomers: function() {
                    return $http.get();
                },
                deleteCustomer: function (n) { return $http.get(); }
            }
            spyOn(customerServiceMock, 'deleteCustomer');



            $controller('exampleController', {
                $scope: scope,
                customerService: customerServiceMock,
                $window:window
            });

            scope.deleteCustomer(15);

        }));


        it('should call the service deleteCustomer', function () {
            expect(customerServiceMock.deleteCustomer).toHaveBeenCalled();
        });
    });

});