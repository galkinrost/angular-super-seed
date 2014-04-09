angular.module("App", [
    "!/bower_components/angular/angular.js",
    "/bower_components/angular-route/angular-route.js",
    "/app/modules/my_module/my_module.js",
    "/app/controllers",
    "/app/directives",
    "/app/filters",
    "/app/services"
], function ($routeProvider) {
    $routeProvider
        .when("/url1", {
            styles: "/app/views/url1/styles.css",
            template: "/app/views/url1/template.html"
        })
        .when("/url2", {
            styles: "/app/views/url2/styles.css",
            template: "/app/views/url2/template.html"
        });
});