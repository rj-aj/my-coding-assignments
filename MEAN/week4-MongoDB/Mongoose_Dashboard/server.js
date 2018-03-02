const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();
// bring in mongoose
const mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name 
//   of our db in mongodb -- this should match the name of the db you are going to use for your project.

mongoose.connect('mongodb://localhost/basic_mongoose');

//  code to check connection made successfully – the mongoose connection object is also a //eventemitter. We give it a anonymous function to console.log a message string

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open');
});

// extract Schema property of mongoose using destructing pattern (es6)
 const { Schema } = mongoose;

//  const Schema = mongoose.Schema; – es5, 
// general coding convention is to capitalize constructor functions ,  classes and interfaces. 
//  In this case Schema is a class

// create new Schema eg. animalSchema 

const animalSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Please enter the animal']
	},
	numLegs: {
		type: Number,
		require: [true, 'Animal needs legs']
	}
}, {
     timestamps: {
        createdAt: 'created_at',
         updatedAt: 'updated_at'
     }
 });
 //mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
 //const Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'
 // written a one line below:

 const Animal = mongoose.model('Animal', animalSchema); // first param is collection and second param is schema name.



// /// set the location for the ejs views
app.set('views', __dirname + '/views');

// // set the view engine
 app.set('view engine', 'ejs');

// // set the static file location
 app.use(express.static(__dirname + "/static"));

// // use or set parser
 app.use(parser.urlencoded({
     extended: true
 }));

//  Use native promises
mongoose.Promise = Promise;

//  ===== Set up Routes =======

// display all animals to index.ejs file
app.get('/', function (request, response) {
    Animal.find({})
        .then(function (animals) {
            console.log("all animals", animals);
            response.render('index', { animals });
        })
        .catch(function (error) {
            const errors = Object.keys(error.errors).map(function (key) {
                return error.errors[key].message;
            });
            console.log(errors);
            //response.render('index', { errors: errors });
        })

});

// GET - route for displaying form to add new animal

 app.get('/animals/new', function(request, response){
 response.render('new');

 });

 // route for adding new animal and save to database
  app.post('/animals/new', function (request, response) {
      console.log("request body", request.body);
      // create a new quote with schema properties corresponding  to request.body  
      let animal = new Animal({
          name: request.body.name,
          numLegs: request.body.numLegs
      });
 //      save that new user to the database (this is the method that actually inserts into the db) 
//    and runs a callback function with an error (if any) from the operation.
     animal.save()
         .then(function (doc) {
              console.log( 'successfully added a animal');
              console.log( doc);
              response.redirect('/');
          })
         .catch(function (error) {
           
              const errors = Object.keys(error.errors).map(function (key) {
                  return error.errors[key].message;
              });
              console.log(errors);
              

          });
  });

// displays edit page
app.get("/animals/edit/:id", function(request, response){
    Animal.findById(request.params.id)
    .then(function(animal){
        response.render('edit', {animal})
    });
});
// edit and update database from edit page
app.post('/animals/:id', function(request, response) {
	Animal.findByIdAndUpdate(request.params.id, { $set: {
		name: request.body.name,
		numLegs: request.body.numLegs
	}})
	.then(function(update) {
		console.log('update successful', update);
		response.redirect('/');
	})
	.catch(function(error) {
		const errors = Object.keys(error.errors).map(function(key) {
			return error.errors[key].message;
		});
		console.log(error);
	});
});

// delete route
app.post('/animals/destroy/:id', function(request, response) {
	Animal.remove({ _id: request.params.id })
	.then(function(del) {
		console.log('delete successful', del);
		response.redirect('/')
	})
	.catch(function(error) {
		const errors = Object.keys(error.errors).map(function(key) {
			return error.errors[key].message;
		});
		console.log(error);
	});
})
// tell the express app to listen on port 5000
app.listen(port, () => console.log(`listening on port ${ port }`));