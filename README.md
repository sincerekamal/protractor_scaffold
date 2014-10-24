# Introduction
This repository is basically for quick setup of End-to-End testing with Protractor.


###Pre-requisites:

	1. Install Node.js
	2. Install Grunt CLI


###Steps:

1. Download or Clone this repo to your machine
2. Open terminal or command prompt and navigate to this repo directory
3. Run npm install with proper privileges
4. For windows, change the selenium driver location in e2e.conf.js file
5. Open a new window in terminal or command prompt and start the webdriver using `webdriver-manager start --standalone`
6. Now run the command `grunt` or `grunt test` to run the test cases.