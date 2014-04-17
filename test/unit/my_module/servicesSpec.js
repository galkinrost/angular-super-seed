describe('MyModule.services', function () {
    beforeEach(module('MyModule.services'));

    it('should ....', inject(function ($httpBackend, myModuleApi) {
        $httpBackend.expectGET('my_module/api').respond('From api with love!');
        myModuleApi();
        $httpBackend.flush();

    }));

});
