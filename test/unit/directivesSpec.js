describe('directives', function () {
    beforeEach(module('App.directives'));

    it('should ....', inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        var element = angular.element('<first-directive></first-directive>');

        $compile(element)(scope);

        scope.$digest();

        expect(element.html()).toEqual('firstDirective');
    }));
});