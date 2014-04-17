describe('MyModule.directives', function () {
    beforeEach(module('MyModule.directives'));

    it('should ....', inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();

        var element = angular.element('<my-module-first-directive></my-module-first-directive>');

        $compile(element)(scope);

        scope.$digest();

        expect(element.html()).toEqual('myModuleFirstDirective');
    }));
});