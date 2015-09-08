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
			   
				.get('/users/11')
                .reply(404)
			   
				.get('/users/12')
                .reply(500)
				
 			    .post('/users/6')
			    .reply(200, {
					id: 6,
  				 	name: "Mrs. Dennis Schulist",
   					username: "Leopoldo_Corkery",
   					email: "Karley_Dach@jasper.info"
 			   });
  
			 