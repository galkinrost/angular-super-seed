module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'app_build/**/*.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};