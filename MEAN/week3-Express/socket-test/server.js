// Import express and path modules
const express = require("express");
const path = require("path");
// Creat the express app.
const app = express();

//Define the static folder
app.use(express.static(path.join(__dirname, "./static")));

// setup ejs templating and define the views folder
app.set ('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

// Root route to render the index.ejs view
app.get('/', function(req,res){
    res.render('index');
});

//Start Node server listening on port 8000
var server =app.listen(8000, function(){
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('Client/socket is connnected!');
    console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here

  // If you don't know where this code is supposed to go reread the above info 
socket.on( "button_clicked", function (data){
    console.log( 'Someone clicked a button!  Reason: '  + data.reason);
    socket.emit( 'server_response', {response:  "sockets are the best!"});
});
});