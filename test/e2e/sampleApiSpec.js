/* This is sample test suite for API testing */

var request = require('supertest');
var should = require('should');
var appUrl = 'http://graph.facebook.com/';

describe("User API", function() {

	it("should have respond user info", function(done) {
		request(appUrl)
			.get('sincerekamal') // here username = sincerekamal
			.expect(200)
			.end(function(err,res) {
				console.log(res);
				done();
			});
	});

});