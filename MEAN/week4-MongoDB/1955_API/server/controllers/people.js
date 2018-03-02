const mongoose = require("mongoose");

const Person = mongoose.model('Person');

module.exports = {

    findAll: function(request, response) {
        Person.find({})
            .then(people => {
                console.log("find all func", people);
                response.json( people );
            })
            .catch(console.log);
    },

    create: function(request, response) {
        console.log(request.params.name);
        var name = request.params;
        Person.create(name)
            .then(person => {
                console.log("created person", person);
                response.redirect("/");
            })
            .catch(console.log);
    },

    findOne: function(request, response) {
        console.log(request.params.name);
        Person.find( { name: request.params.name } )
            .then(person => {
                console.log("requested person", person);
                response.json(person);
            })
            .catch(console.log);
    },

    remove: function(request, response) {
        console.log(request.params.name);
        Person.remove( { name: request.params.name } )
        .then(people => {
            response.redirect("/");
        })
        .catch(console.log);
    }

};