describe('MyModule.controllers', function () {
    beforeEach(module('MyModule.controllers'));

    it('should ....', inject(function ($controller) {
        var scope = {};

        var myCtrl1 = $controller('MyModuleFirstController', {$scope: scope});
        expect(myCtrl1).toBeDefined();
    }));

});