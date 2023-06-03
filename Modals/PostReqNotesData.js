const mongoose=require('mongoose');


const Schema = mongoose.Schema;

const PosReqNotesDataSchema = new Schema({
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
    date:{
        type:String,
        required:true
    }
})

//name to import, schema , db name 
module.exports=mongoose.model('PostReqNotesData',PosReqNotesDataSchema,'PostReqNotesData');