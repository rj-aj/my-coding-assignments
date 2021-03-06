const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, './client')));

const server = app.listen(port,() => console.log(`listening on port ${ port }`));
const io = require('socket.io')(server);

let count = 0;
io.on('connection',socket => {
    console.log('incoming socket connection');

socket.on('buttonClicked', function(){
    numberUpdated(++count);
});
socket.on('reset', function(){
    numberUpdated(count=0);
});
socket.emit('numberUpdated',count);
});

function numberUpdated(number){
    io.emit('numberUpdated', number);
}
