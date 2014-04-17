describe('services', function () {
    beforeEach(module('App.services'));

    it('should ....', inject(function ($httpBackend, api) {
        $httpBackend.expectGET('api').respond('From api with love!');
        api();
        $httpBackend.flush();
    }));

});