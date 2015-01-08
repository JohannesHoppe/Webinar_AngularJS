requirejs.config({
    baseUrl: 'Scripts',
    waitSeconds: 30,
    paths: {
        'jquery': 'jquery-1.11.1',
        'bootstrap': 'bootstrap.min',
        'uibootstrap': 'ui-bootstrap-custom-tpls-0.12.0.min',
        'angular-resource': 'angular-resource.min',
        'toastr': 'toastr.min'
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
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'toastr':{
            deps:['jquery']
        },
        'uibootstrap': {
            deps:['angular']
        },
        'angular-resource': {
            exports:'angular',
            deps:['angular']
        }
    }
});