define([
    'angular',
    'layout/layout'
], function(angular) {

    angular.module('app.services', []).factory('Customer', function ($resource) {
        return $resource('http://ex.extjs-kochbuch.de/api/Customer/:id', { id: '@_id' }, {
            update: {
                method: 'PUT'
            }
        });
    });
});