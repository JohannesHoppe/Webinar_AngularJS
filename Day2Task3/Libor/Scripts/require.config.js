requirejs.config({
    baseUrl: 'Scripts',
    waitSeconds: 30,
    paths: {
        jquery: 'jquery-1.11.1',
        'ui-grid': 'ui-grid-unstable',
        'angular-smart-table': 'layout/smart-table.min'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: [
                'jquery'
            ]
        },
        'angular-route': {
            exports: 'angular',
            deps: [
                'angular'
            ]
        },
        'angular-mocks': {
            exports: 'angular',
            deps: [
                'angular'
            ]
        }
    },
    packages: [

    ]
});