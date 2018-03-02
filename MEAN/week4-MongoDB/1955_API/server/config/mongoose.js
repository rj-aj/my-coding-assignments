const mongoose = require('mongoose');

const path = require('path');

const fs = require('fs');

mongoose.connect('mongodb://localhost/1955api');
mongoose.connection.on('connected', () => console.log('Connected to mongodb!'));

mongoose.Promise = global.Promise;

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
});