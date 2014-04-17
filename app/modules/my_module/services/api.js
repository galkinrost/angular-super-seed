angular.module('MyModule.services')
    .service('myModuleApi', function ($http) {
        return function () {
            return $http.get('my_module/api');
        }
    });