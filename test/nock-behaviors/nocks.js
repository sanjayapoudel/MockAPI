var url = 'http://jsonplaceholder.typicode.com';
var nock = require('nock');

var api = nock(url)
			   .persist()
	           .get('/users/4')
  			   .reply(200, {
   			   	id: 4,
   			   	name: "Patricia Lebsack",
  			    username: "Karianne",
   			   	email: "Julianne.OConner@kory.org"
  				})
				
  			    .get('/users/5')
 			    .reply(200, {
					id: 5,
   				 	name: "Chelsey Dietrich",
    				username: "Kamren",
    				email: "Lucio_Hettinger@annie.ca"
  			   })
			   
 			    .put('/posts/1', {
			      	 			id: 1,
			       				title: "foo",
			      	 			body: "bar",
			       				userId: 1	
 			    			})
			    .reply(200, {
			       			id: 1,
			       			title: "foo",
			       			body: "bar",
			      	 		userId: 1
 			   	 			})
				
 			    .delete('/posts/1')
			    .reply(204)
			   
				.get('/users/11')
                .reply(404)
			   
				.get('/users/12')
                .reply(500)
				
 			    .post('/users/6', { 
								name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery"
								})
 			     .reply(201, {
 			              ok: true,
 			              id: '123ABC',
 			              rev: '946B7D1C'
 			   });
  