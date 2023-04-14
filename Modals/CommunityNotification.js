const mongoose=require('mongoose');
const nodemon = require('nodemon');

const Schema = mongoose.Schema;

const communitynotificationSchema = new Schema({
    date:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    link:{
        type:String,
       
    }


})

//name to import, schema , db name 
module.exports=mongoose.model('communitynotification',communitynotificationSchema,'CommunityNotification');