angular.module('MyModule.filters')
    .filter('substring', function () {
        return function (text,pos) {
            return ('' + (text || '')).substring(pos);
        }
    });