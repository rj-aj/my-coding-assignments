// get all our require statements out at the top, store them to variables

// express will initialize our express app
const express = require('express');

// path is to help fix file paths across mac and linux, use it!
const path = require('path');

// body-parser gets us post data into the req.body, you MUST use it!
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

// app is our express app, the express variable is just a function we must run
const app = express();


// now let's do all out settings and middlewares

// we must set a view engine if we're still rendering views
app.set('view engine', 'ejs');

// our view engine must to told where to find the views
app.set('views', path.join(__dirname, './client/views'));

// static content will get served for any request that matches the file path
// to this folder. running GET '/car1.jpeg' will go into the static folder and 
// look for any files called 'car1.jpeg'
app.use(express.static(path.join(__dirname, './client/static')));

// this actually sets up bodyparser with our express app
app.use(bodyParser.urlencoded({extended: true}));

// require mongoose.js for models
require('./server/config/mongoose.js');

// require routes.js for routing.
// this line is a little funky, but requiring routes will return a function.
// we then immediately run that function and pass it app. see routes.js for more details!
require('./server/config/routes.js')(app);
//const routes_setter = require('./server/config/routes.js');
//routes_setter(app);

// tell the express app to listen on port 5000
app.listen(port, () => console.log(`listening on port ${ port }`));