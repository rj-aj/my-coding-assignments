
const mongoose = require ('mongoose');
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


