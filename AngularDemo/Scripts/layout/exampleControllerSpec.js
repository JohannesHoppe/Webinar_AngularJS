define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    describe('exampleController', function () {

        var scope, customerId;        

        beforeEach(module('layout', function ($provide) {
            var windowMock = {
                confirm: function() { return true;  }
            }

            $provide.value('$window', windowMock);

        }));

        beforeEach(inject(function ($rootScope, $controller, $http) {

            scope = $rootScope.$new();
            
            var customerServicMock = {
                refreshCustomers: function() {
                    return $http.get();
                },
                deleteCustomer: function (value) {
                    customerId = value;
                    return $http.get();
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

        it('deleteCustomer should call customerService.deleteCustomer', function () {
            customerId = null;
            scope.deleteCustomer(1);
            expect(customerId).toEqual(1);
            

        });
    });

});