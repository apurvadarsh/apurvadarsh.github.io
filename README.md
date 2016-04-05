# Feed Reader Testing
=======================================================================================================
## Apurv Adarsh (Frontend Web Developer Nanodegree- Udacity)


## To run the project: http://apurvadarsh.github.io/
## About the project:

How to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Functionalities:

1. [Project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. Tw test suite named "The menu".
5. Test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
6. Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
7. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
8. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.

