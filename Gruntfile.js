module.exports = function (grunt) {

    grunt.initConfig({
        ngbuild: {
            build: {
                src: ['app/app.js'],
                dest: 'app_build/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-build');

    grunt.registerTask('default', ['ngbuild']);

};
