// load express 
const express = require("express");

// load path 
const path = require('path');

const port = process.env.PORT || 8000;

// call express and store in const app
const app = express();

//get bodyParser and use it
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// require the mongoose config file
require('./server/config/mongoose');

// require routes
app.use('/api/tasks', require('./server/config/routes/task'))