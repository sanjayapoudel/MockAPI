var request = require('request');
var nock = require('./nock-behaviors/nocks.js');
var assert = require("assert");

describe('Test Hooks', function() {

  before(function() {
    console.log("Starting Mock API tests...")
  });

  after(function() {
    console.log("Finished running Mock API tests...")
  });

  beforeEach(function() {
    console.log("starting up testcase.")
  });
  
  afterEach(function() {
    console.log("cleaning up testcase.")
  });

  describe('MockAPI tests', function() {
    context('Test Case => GET:users/5', function () {
      it('Should return id:5, name: "Chelsey Dietrich", username: "Kamren" and email: "Lucio_Hettinger@annie.ca"', function () {
	   var options = {
		      url: 'http://jsonplaceholder.typicode.com/users/5',
		      method: 'GET'
		}
		request(options, function (error, response, body) {
  	    if (!error && response.statusCode == 200) {
		  var _body = JSON.parse(body);
  	      assert.equal(_body.id, 5, "id not matched.");
  	      assert.equal(_body.name, "Chelsey Dietrich", "name not matched.");
		  assert.equal(_body.username, "Kamren", "username not matched.");
		  assert.equal(_body.email, "Lucio_Hettinger@annie.ca","email address not matched.");
  	    }
  	  })
      });
    });
  })
  
  describe('MockAPI tests', function() {
    context('Test Case => POST:users/6', function () {
      it('Should return id:6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery" and email: "Karley_Dach@jasper.info"', function () {
   	   var options = {
   		      url: 'http://jsonplaceholder.typicode.com/users/6',
   		      method: 'POST'
   		}
		request(options, function (error, response, body) {
  	    if (!error && response.statusCode == 200) {
		  var _body = JSON.parse(body);
  	      assert.equal(_body.id, 6);
  	      assert.equal(_body.name, "Mrs. Dennis Schulist", "name not matched.");
		  assert.equal(_body.username, "Leopoldo_Corkery", "username not matched.");
		  assert.equal(_body.email, "Karley_Dach@jasper.info", "email address not matched");
  	    }
  	  })
      });
    });
  })
  
  describe('MockAPI tests', function() {
    context('Test Case => GET:users/11', function () {
      it('Should return 404"', function (done) {
   	   var options = {
   		      url: 'http://jsonplaceholder.typicode.com/users/11',
   		      method: 'GET'
   		}
		request(options, function (error, response, body) {
	  	    if (!error) {
				assert(response.statusCode == 404);
				done();
			}
		})
      });
    });
  });
  
  describe('MockAPI tests', function() {
    context('Test Case => GET:users/11', function () {
      it('Should return 500"', function (done) {
   	   var options = {
   		      url: 'http://jsonplaceholder.typicode.com/users/12',
   		      method: 'GET'
   		}
		request(options, function (error, response, body) {
	  	    if (!error) {
				assert(response.statusCode == 500);
				done();
			}
		})
      });
    });
  });
  
});

					