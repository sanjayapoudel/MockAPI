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
    console.log("starting up testcase to run.")
  });
  
  afterEach(function() {
    console.log("cleaning up..")
  });

  describe('MockAPI tests', function() {
    context('Test Case: HTTP GET => GET:users/5', function () {
      it('Should return id:5, name: "Chelsey Dietrich", username: "Kamren" and email: "Lucio_Hettinger@annie.ca"', function (done) {
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
		  done();
  	    }
  	  })
      });
    });
  });
  
  describe('MockAPI tests', function() {
    context('Test Case: HTTP POST => POST:users/6', function () {
      it('Should return http status 201, ok = true"', function (done) {
	  	var postData ={
		    name: "Mrs. Dennis Schulist", 
			username: "Leopoldo_Corkery"
		};
		request.post({
		    uri:"http://jsonplaceholder.typicode.com/users/6",
		    headers:{'content-type': 'application/x-www-form-urlencoded'},
		    body:require('querystring').stringify(postData)
		    }, function(error, response, body) {
				
				if (!error ){
	  		    var _body = JSON.parse(body);
	  		    assert.equal(_body.ok, true);
	    	    assert(_body.id != null);
				assert(_body.rev != null);
		       	assert.equal(response.statusCode, 201);
				done();
			    }
		});
       });
  	  });
	});
	
	describe('MockAPI tests', function() {
      context('Test Case: HTTP PUT => PUT:posts/1', function () {
        it('Should return http status 200 and modified data."', function (done) {
			request({ 
				url: "http://jsonplaceholder.typicode.com/posts/1", 
				method: 'PUT', 
				json: {
					id: 1, 
					title: 'foo', 
					body: 'bar', 
					userId: 1 }}, function(error, response, body) {
				
				if (!error && response.statusCode == 200){
					assert(body.id == 1);
		    	    assert.equal(body.title, "foo");
					assert.equal(body.body, "bar");
					assert(body.userId == 1);
					done();
					}
				});
	        });
	      });
	  	});
	
	 describe('MockAPI tests', function() {
	      context('Test Case: HTTP DELETE => DELETE:posts/1', function () {
	        it('Should return http status 204', function (done) {
	  	    var options = {
	  		      url: 'http://jsonplaceholder.typicode.com/posts/1',
	  		      method: 'DELETE'
	  		}
	  		request(options, function (error, response, body) {
	    	    if (!error){
					assert(response.statusCode == 204);
	  		    done();
	    	    }
	    	  })
	        });
	      });
	  });	
	
  describe('MockAPI tests', function() {
    context('Test Case: Page Not Found => GET:users/11', function () {
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
    context('Test Case: Internal Server Error => GET:users/12', function () {
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

					