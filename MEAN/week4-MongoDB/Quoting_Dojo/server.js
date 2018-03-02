const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

// bring in mongoose
const mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name 
//   of our db in mongodb -- this should match the name of the db you are going to use for your project.
//mongoose.connect('mongodb://localhost/basic_mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');

//  code to check connection made successfully – the mongoose connection object is also a //eventemitter. We give it a anonymous function to console.log a message string

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open');
});

// extract Schema property of mongoose using destructing pattern (es6)

const {
    Schema
} = mongoose;

// const Schema = mongoose.Schema; – es5, 
// general coding convention is to capitalize constructor functions ,  classes and interfaces. 
// In this case Schema is a class

// create new Schema eg. QuoteSchema 

const QuoteSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required and must have at least 4 characters"],
        minlength: 4,
        trim: true
    },
    quote: {
        type: String,
        required: [true, "Quote is required and must have at least 4 characters"],
        minlength: 4,
        trim: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
//mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
//const Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'
// rewritten a one line below:

const Quote = mongoose.model('Quote', QuoteSchema); // first param is collection and second param is schema name.

const app = express();

/// set the location for the ejs views
app.set('views', __dirname + '/views');

// set the view engine
app.set('view engine', 'ejs');

// set the static file location
app.use(express.static(__dirname + "/static"));

// use or set parser
app.use(parser.urlencoded({
    extended: true
}));

// Use native promises
//mongoose.Promise = Promise;

// ===== Set up Routes =======

// render index.ejs file
app.get('/', function (request, response) {
    response.render('index');
})

// route for adding new quote
app.post('/quotes', function (request, response) {
    console.log("request body", request.body);
    // create a new quote with name and quote corresponding to request.body  
    let quote = new Quote({
        name: request.body.name,
        quote: request.body.quote
    });
    // save that new user to the database (this is the method that actually inserts into the db) 
    // and runs a callback function with an error (if any) from the operation.
    quote.save()
        .then(function (savedQuote) {
            console.log(savedQuote, 'successfully added a quote');
            response.redirect('/quotes');
        })
        .catch(function (error) {
            const errors = Object.keys(error.errors).map(function (key) {
                return error.errors[key].message;
            });
            //response.send(errors);
            response.render('index', {
                errors: errors
            });

        });
});

// route to display all quotes

app.get('/quotes', function (request, response) {
    Quote.find({})
        .then(function (quotes) {
            console.log("all quotes", quotes);
            response.render('quotes', {
                quotes: quotes
            });
        })
        .catch(function (error) {
            const errors = Objects.keys(error.errors).map(key => error.errors[key].message);

            console.log(errors)
            response.render('index', {
                errors: errors
            });
        })

})


// tell the express app to listen on port 5000
app.listen(port, () => console.log(`listening on port ${ port }`));