angular.module('MyModule.directives')
    .directive('myModuleFirstDirective', function () {
        return {
            restrict: 'E',
            controller: function ($scope) {
                $scope.name = 'myModuleFirstDirective';
            },
            replace: true,
            templateUrl: 'templates/first_directive.html'
        }
    });