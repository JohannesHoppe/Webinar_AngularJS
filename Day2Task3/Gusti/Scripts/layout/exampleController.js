define([
    'angular',
    'uibootstrap',
    'toastr',
    'layout/layout'
], function (angular, uibootstrap, toastr) {

    angular.module('layout')
        .controller('exampleController', ['$scope', '$http', '$modal', '$routeParams', '$location', function ($scope, $http, $modal, $routeParams, $location) {


            function loadCustomers() {
                $http.get('http://ex.extjs-kochbuch.de/api/Customer?page=&start=15&limit=10').
                    success(function (data, status, headers, config) {
                        $scope.customers = data.Data;
                        $scope.totalItems = data.Total;
                        $scope.currentPage = 1;

                    }).
                    error(function () {
                        toastr.error("Can't get the list of Customers!");
                    });
            };

            $scope.editCustomer = function (customer) {
                $location.path('/edit/' + customer.Id);
            };
            $scope.openDeleteConfirmation = function (customer) {
                var modalInstance = $modal.open({
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    resolve: {
                        customer: function () {
                            return customer;
                        }
                    }
                });

                modalInstance.result.then(function (customer) {
                    $scope.customer = customer;
                    $http.delete("http://ex.extjs-kochbuch.de/api/Customer/" + customer.Id).success(function (data, status, headers, config) {
                        toastr.success("Customer deleted!");
                        loadCustomers();
                    }).error(function (data, status, headers, config) {
                        toastr.error("Customer NOT deleted!");
                    });
                }, function () {

                });

            }


            $scope.model = {
                text: 'Hello World'
            }

            $scope.changeText = function () {
                $scope.model.text = "Hello AngularJS";
            }


            loadCustomers();

        }])
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, customer) {

        $scope.customer = customer;

        $scope.deleteCustomer = function () {
            $modalInstance.close($scope.customer);
        };

        $scope.deleteCancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });;

});