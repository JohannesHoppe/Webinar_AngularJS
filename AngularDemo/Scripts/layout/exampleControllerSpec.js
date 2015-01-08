define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    ddescribe('exampleController', function () {

        var scope, customerServicMock;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http, $window) {

            scope = $rootScope.$new();
            
            customerServicMock = {
                refreshCustomers: function() { return $http.get(); },
                deleteCustomer: function () { return $http.get(); }
            }

            $controller('exampleController', {
                $scope: scope,
                customerService: customerServicMock
            });

            $window.confirm = function() { return true; }
        }));

        it('should say hello', function () {
            expect(scope.model.text).toEqual('Hello World');
        });

        it('deleteCustomer should call customerService.deleteCustomer', function () {
            
            spyOn(customerServicMock, 'deleteCustomer').and.callThrough();

            scope.deleteCustomer(13);

            expect(customerServicMock.deleteCustomer).toHaveBeenCalledWith(13);

        });
    });

});