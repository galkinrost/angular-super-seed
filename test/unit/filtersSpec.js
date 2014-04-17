describe('filters', function () {
    beforeEach(module('App.filters'));

    it('should ....', inject(function ($filter) {
        var length = $filter('length');

        expect(length('abc')).toBe(3);
    }));

});