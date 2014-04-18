describe('my app', function () {

    browser.get('');

    it('should automatically redirect to /url1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('/url1');
    });


    describe('url1', function () {

        beforeEach(function () {
            browser.get('#/url1');
        });


        it('should render view1 when user navigates to /url1', function () {
            expect(element.all(by.css('[ng-view]')).first().getText()).
                toMatch(/First Controller/);
        });

    });


    describe('url2', function () {

        beforeEach(function () {
            browser.get('#/url2');
        });


        it('should render view2 when user navigates to /url2', function () {
            expect(element.all(by.css('[ng-view]')).first().getText()).
                toMatch(/Second Controller/);
        });

    });
});