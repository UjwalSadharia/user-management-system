const mongoose = require('mongoose');


// creating simple model
var scheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})


const userDB = mongoose.model('users',scheme);

module.exports =userDB;