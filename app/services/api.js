angular.module('App.services')
    .service('api', function ($http) {
        return function () {
            return $http.get('api');
        }
    });