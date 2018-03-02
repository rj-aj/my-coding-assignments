const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type:String
    }
});

const Person = mongoose.model("Person", PersonSchema);