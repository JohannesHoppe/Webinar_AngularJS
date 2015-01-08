define([
    'angular',
    'layout/layout'
], function (angular) {

    angular.module('layout')
        .factory('customerService', ['$http', function ($http) {

            var baseApi = 'http://ex.extjs-kochbuch.de/api/Customer';

            var $events = $({});

            var refreshCustomers = function () {
                return $http.get(baseApi);             
            }

            var deleteCustomer = function (customerId) {
                return $http.delete(baseApi + "/" + customerId);
            }

            var getCustomer = function (customerId) {
                return $http.get(baseApi + "/" + customerId);
            }

            var saveCustomer = function (customer) {
                var method, url;

                if (customer.Id) {
                    method = $http.put;
                    url = baseApi + "/" + customer.Id;
                }
                else {
                    method = $http.post;
                    url = baseApi;
                }

                return method(url, customer);
            }

            return {
                refreshCustomers: refreshCustomers,
                deleteCustomer: deleteCustomer,
                getCustomer: getCustomer,
                saveCustomer: saveCustomer
            }
        }]);

});