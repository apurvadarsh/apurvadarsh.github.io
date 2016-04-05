/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */


    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have valid URLs defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(isUrlDefined(feed.url)).toBe(true);
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have non-empty URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(isUrlEmpty(feed.name)).not.toBe(true);
            });
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {

        /* Test that ensures the menu element is hidden by default.
         */
        var body = $('body');

        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        var menuIcon = $('.menu-icon-link');
        it('changes visibility when the menu icon is clicked', function() {
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });
    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('has at least a single entry', function() {
            var entries = $('.feed .entry');
            expect(entries.length >= 1).toBe(true);
        });
    });


    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var beforeLoad, afterLoad;

        /* Calls the `loadFeed` function with callbacks to ensure that
         * they're complete.
         */
        beforeEach(function(done) {
            /* To ensure that there are at least two feeds */
            expect(allFeeds.length >= 2).toBe(true);

            /* Load the first feed */
            loadFeed(0, function() {
                /* Set the beforeLoad to content of feed */
                beforeLoad = $('.header-title').text();
                /* Load second feed at index 1 */
                loadFeed(1, function() {
                    /* Set the afterLoad to content of new feed */
                    afterLoad = $('.header-title').text();
                    done();
                });
            });
        });

        /* Tests that when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
        it('changes content when feed is loaded', function(done) {
            expect(beforeLoad == afterLoad).toBe(false);
            done();
        });
    });

}());