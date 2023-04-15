const mongoose=require('mongoose');
const nodemon = require('nodemon');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  
    img_url:{
        type:String,
        required:true
    }


})

//name to import, schema , db name 
module.exports=mongoose.model('articles',articleSchema,'Articles');