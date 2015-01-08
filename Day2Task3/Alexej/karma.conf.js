// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: 'CbIndex/Scripts',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jasmine',          // Jasmine has several built-in matchers, see: https://github.com/pivotal/jasmine/wiki/Matchers
            'jasmine-matchers', // https://github.com/JamieMason/Jasmine-Matchers
            'requirejs'
        ],

        // list of files / patterns to load in the browser
        files: [

            // an additional require config file, which additionaly loads all Spec.js files as a dependencies - goes into <script> tag
            'test/require.config.karma.js',

            // the general config file - goes into <script> tag
            'require.config.js',

            // the big & dirty lightstreamer file
            'lightstreamer.js',

            // these files will available in the webserver but NOT loaded with a <script> tag
            {
                pattern: '**/*.js',
                included: false
            }
        ],


        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
    
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['nested' /*, 'xml' */],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
            //'Chrome_without_security' // can run AJAX calls without CORS to be enabled
            //'Firefox',
            //'IE'
        ],

        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                // --disable-web-security:Don't enforce the same-origin policy. (Used by people testing their sites.)
                flags: ['--disable-web-security']
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        nestedReporter: {
            color: {
                should: 'red',
                browser: 'yellow'
            },
            icon: {
                failure: 'x ',
                indent: '_ ',
                browser: ''
            }
        },

        xmlReporter: {
            outputFile: '..\\test-results.testxml'
        }
    });
};
