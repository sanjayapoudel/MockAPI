/************ Author: Sanjay Poudel ***************/

This functional test suite(framework) requires node/npm to be installed alongwith the installation of requiring node_modules.
Node can be downloaded at https://nodejs.org/en/ . This should have npm, node.js's package ecosystem.
 
This framework uses the following node modules.	
 - Mocha framework is used for writing functional tests.
    http://mochajs.org
 - node_module nock is used for mocking http respose/API calls.
 	https://github.com/pgte/nock
 - request module is used for creating/making http requests to nock service/module.
 	https://github.com/request/request
 
 To run the functional tests from inside inside /test/test.js
 Clone the repo from https://github.com/sanjayapoudel/MockAPI
 
 And please install the following nodules(if required)
  1. npm install mocha
  2. npm install nock
  3. npm install request
  4. from terminal, navigate to /MockAPI directory and hit the following command:
  	 npm test	 
  5. Done.
  
  
  
  PS: http://jsonplaceholder.typicode.com is used OPEN APIs and this test suite only include some sample functional tests for various types HTTP requests. It doesn't 
      cover all the scenarios.
 
 