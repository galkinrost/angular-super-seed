angular.module("App", [
    "!/bower_components/angular/angular.js",
    "/bower_components/angular-route/angular-route.js",
    "modules/my_module/my_module.js",
    "controllers",
    "directives",
    "filters",
    "services"
], function ($routeProvider) {
    $routeProvider
        .when("/url1", {
            controller: "FirstController",
            templateUrl: "views/url1.html"
        })
        .when("/url2", {
            controller: "SecondController",
            templateUrl: "views/url2.html"
        })
        .otherwise({
            redirectTo: "/url1"
        });
});

