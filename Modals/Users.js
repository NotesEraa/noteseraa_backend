const mongoose=require('mongoose');
const nodemon = require('nodemon');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//name to import, schema , db name 
module.exports=mongoose.model('users',userSchema,'Users');