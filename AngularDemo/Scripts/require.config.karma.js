


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
    },
    deps: (function() {

        var allTestFiles = [];

        Object.keys(window.__karma__.files).forEach(function(file) {
            if (/Spec\.js$/.test(file)) {
                allTestFiles.push(file.replace(/^\/base\//, '').replace(/\.js$/, ''));
            }
        });

        return allTestFiles;
    })()
});