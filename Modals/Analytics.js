const mongoose=require('mongoose');


const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
    article_visit:{
        type:Integer
    }, 
    site_visit:{
        type:Integer
    },
    daily_user:{
        type:Array
    },
    article_data:{
       type:Array
    }


})

//name to import, schema , db name 
module.exports=mongoose.model('analytics',analyticsSchema,'Analytics');