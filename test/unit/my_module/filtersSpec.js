describe('MyModule.filters', function () {
    beforeEach(module('MyModule.filters'));

    it('should ....', inject(function ($filter) {
        var substring = $filter('substring');

        expect(substring('abc',1)).toBe('bc');
    }));

});
