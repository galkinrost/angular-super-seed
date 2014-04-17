describe('controllers', function () {
    beforeEach(module('App.controllers'));

    it('should ....', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();

        var myCtrl1 = $controller('FirstController', {$scope: scope});
        expect(myCtrl1).toBeDefined();
        expect(scope.name).toBe('FirstController');
    }));

});