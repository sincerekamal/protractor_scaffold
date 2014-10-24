/* This is sample test suite for UI testing */

// Define the protractor instance globally,
//so that you can use in any function in this file

var prot = protractor.getInstance();

// Define the Application URL(base URL) to be tested, 
// or else define in e2e.conf.js file
var appUrl = "https://www.google.co.in/";


describe('Check for Elements', function () {
	
	beforeEach(function() {

		isAngularSite(false);

		browser.get(appUrl);
	});

	it('should have input fields for search', function (done) {
		
		browser.isElementPresent(by.css('#gbqfq'));

		done();
	});


});
