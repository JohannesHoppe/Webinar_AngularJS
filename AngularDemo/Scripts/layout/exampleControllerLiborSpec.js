define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    describe('Libors exampleController', function () {

        var scope, deletedId;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http, $window) {

            scope = $rootScope.$new();
            
            var customerServicMock = {
                refreshCustomers: function() {
                    return $http.get();
                },
                deleteCustomer: function (id) {
                    deletedId = id;
                    return $http.delete();
                }
            }

            $controller('exampleController', {
                $scope: scope,
                customerService: customerServicMock
            });

            $window.confirm = function() { return true;  }

        }));


        it('should say hello', function () {
            expect(scope.model.text).toEqual('Hello World');
        });

        it('should call deleteCustomer', function () {

            scope.deleteCustomer(13);
            expect(deletedId).toEqual(13);
        });

    });

});