define([
    'angular',
    'angular-mocks',
    'layout/exampleController'], function (sut) {

    describe('exampleController', function () {

        function modalDialogMock() {
            this.confirmResult;

            this.confirm = function () {
                return this.confirmResult;
            }

            this.confirmTrue = function () {
                this.confirmResult = true;
            }

            this.confirmFalse = function () {
                this.confirmResult = false;
            }
        }

        var scope, customerServicMock;
        var modalDialog;

        beforeEach(module('layout'));

        beforeEach(inject(function ($rootScope, $controller, $http) {

            scope = $rootScope.$new();
            
            customerServicMock = {
                refreshCustomers: function() {
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

        beforeEach(inject(function ($rootScope, $controller, $http) {
            scope = $rootScope.$new();

            modalDialog = new modalDialogMock();

            customerServicMock = {
                refreshCustomers: function () {
                    return $http.get();

                },
                deleteCustomer: function (id) {
                    return $http.get();

                }
            }

            $controller('exampleController', {
                $scope: scope,
                customerService: customerServicMock,
                $window: modalDialog
            });

        }));

        it('should be able to delete customer', function () {
            modalDialog.confirmTrue();

            scope.deleteCustomer(1);
            spyOn(customerServicMock, 'deleteCustomer').and.callThrough();

            scope.deleteCustomer(13);

            expect(customerServicMock.deleteCustomer).toHaveBeenCalledWith(13);
        });
    });

});