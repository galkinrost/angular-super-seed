module.exports = function (grunt) {

    grunt.initConfig({
        ngbuild: {
            build: {
                src: ['app/app.js'],
                dest: 'app/build/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ng-build');

    grunt.registerTask('default', ['ngbuild']);

};
