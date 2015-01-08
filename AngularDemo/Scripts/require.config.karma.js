requirejs.config({
    baseUrl: '/base', // instead of 'Scripts'
    waitSeconds: 30,
    paths: {
        'jquery': 'jquery-1.11.1'
    },
    shim: {
        
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            exports: 'angular',
            deps: ['angular']
        },
        'angular-mocks': {
            exports: 'angular',
            deps: ['angular']
        }
    }
});