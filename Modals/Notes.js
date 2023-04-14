const mongoose=require('mongoose');
const nodemon = require('nodemon');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    subject:{
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }

})

//name to import, schema , db name 
module.exports=mongoose.model('notes',notesSchema,'Notes');