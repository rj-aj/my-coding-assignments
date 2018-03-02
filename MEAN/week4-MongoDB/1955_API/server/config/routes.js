const mongoose = require('mongoose');

const Person = mongoose.model('Person');

const people = require('../controllers/people');

module.exports = function(app) {

    app.get('/', function (req, res){
        people.findAll(req, res);
    });

    app.get('/new/:name', function(req, res){
        people.create(req, res);
    });

    app.get('/:name', function(req, res){
        people.findOne(req, res);
    });

    app.get('/remove/:name', function(req, res){
        people.remove(req, res);
    });
};