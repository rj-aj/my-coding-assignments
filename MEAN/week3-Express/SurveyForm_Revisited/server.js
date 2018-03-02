const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"./views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./static')));

app.get('/', function(request, response){
    response.render('index');
});


const server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
const io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    socket.on("posting_form", function(data){
        let random_number = Math.floor((Math.random()*1000)+ 1);

        socket.emit("updated_message", { response: data });
        socket.emit("random_number", { response: random_number});
    });
});