// require express
const express = require("express");
// path module 
const path = require("path");
// create the express app
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
// require session
const session = require("express-session");

// using session
app.use(session({secret: "supersecret"}));
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view

app.get('/', function(req, res) {
    if(!req.session.counter){
        req.session.counter = 0;
    }
    //console.log(req.session.counter);
    req.session.counter +=1;
    res.render("index", { counter : req.session.counter});
});

app.post('/two', function(req,res){
  req.session.counter++;
  res.redirect('/');
});

app.post('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
});
// tell the express app to listen on port 5000
app.listen(port,() =>  console.log(`listen on port ${ port }`));