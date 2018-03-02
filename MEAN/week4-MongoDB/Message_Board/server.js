// require express module
var express = require("express");
const path = require('path');
const port = process.env.PORT || 8000;

// call express and store the resulting application in var app
var app = express();

// get body parser and use it
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

// require mongoose and connect
var mongoose = require('mongoose');

// connect to the mongodb database using mongoose -- "basic_mongoose" is the name 
//   of our db in mongodb -- this should match the name of the db you are going to use for your project.

mongoose.connect('mongodb://localhost/basic_mongoose');

//  code to check connection made successfully – the mongoose connection object is also a //eventemitter. We give it a anonymous function to console.log a message string

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open');
});

// extract Schema property of mongoose using destructing pattern (es6)
const {
    Schema
} = mongoose;
//  const Schema = mongoose.Schema; – es5, 

// create Message Schema from Schema
var MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [4, "Name must be at least 4 characters"],
        trim: true
    },
    message: {
        type: String,
        required: [true, "Message is required."],
        minlength: [4, "Message must be at least 4 characters"],
        trim: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

});

// create Comment Schema
const CommentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    comment: {
        type: String,
        required: [true, 'Please enter a comment.'],
        minlength: 4
    },
    _message: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {
    timestamps: true
    
});
const Message = mongoose.model('Message', MessageSchema); // first param is collection and second param is schema name.

const Comment = mongoose.model('Comment', CommentSchema); // first param is collection and second param is schema name.

// set path for the ejs views
app.set('views', __dirname + '/views'); 
// set the view engine
app.set('view engine', 'ejs');
// set the static file path
app.use(express.static(__dirname + "/static"));

// Set up Routes 

// route to display all messages and their comments
app.get('/', function(request, response){
    Message.find({})
        .populate('comments')
        .then( messages => {
            response.render('index', {messages});
        })
        .catch(error => {
			const errors = Object.keys(error.errors).map(key => error.errors[key].message);
			console.log(errors);
			throw error;
		});
});


/// Handles new messages
app.post('/message', function(req, res) {
	var message = new Message({name:request.body.name,message:request.body.message});
	message.save()
		.then(function() {
			response.redirect('/');
		})
		.catch(error => {
			const errors = Object.keys(error.errors).map(key => error.errors[key].message);
			console.log(errors);
			throw error;
		});
});

//Handles new comments
app.post('/comment/:id', function(req, res) {
	const messageId = req.params.id;
	Message.findById(messageId, function(error, message) {
		const new_comment = new Comment({ name: req.body.name, comment: req.body.comment });
		new_comment.message = message._id;
		Message.update({ _id: message._id }, { $push: { comments: new_comment }})
			.then(function(update) {
				console.log('update message successful!', update);
			})
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			});
		new_comment.save()
			.then(comment => {
				console.log('save comment successful!', comment);
				res.redirect('/');
			})
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			})
	});
});

// // Handles new comment post
// app.post("/comment/:id", function (request, response){
//     Message.findOne({_id:request.params.id})
//     	.then(function(message) {
//         	var comment = new Comment(request.body);
//         	comment._message = message._id;
//         	comment.save()
//         		.then(function() {
// 					message.comments.push(comment);
// 					message.save()
// 						.then(function() {
// 							response.redirect('/');
// 						})
// 				})
// 		.catch(function(error) {
// 			request.session.err = {comment_err:{id:request.params.id,errors:prettifyErrors(error.errors)}};
// 			response.redirect('/');
// 		})
//     })
// })

//End Routes
// tell the express app to listen on port 5000
app.listen(port, () => console.log(`listening on port ${ port }`));