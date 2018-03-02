// bring in mongoose
const mongoose = require('mongoose');

// require the fs module for loading model files

const fs = require( 'fs');

// require path for getting the model path

const path = require ('path');

// connect to mongoosh

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name 
//   of our db in mongodb -- this should match the name of the db you are going to use for your project.

mongoose.connect('mongodb://localhost/basic_mongoose');

//  code to check connection made successfully – the mongoose connection object is also a //eventemitter. We give it a anonymous function to console.log a message string

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open');
});

mongoose.Promise = global.Promise;

// create a variable that points to the path where all of the models live

const models_path = path.join(__dirname, './../models');

// read all the files in the model_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		//require the file (this runs the model file which requires the schema)
		require (models_path + '/' + file);
	}
});
