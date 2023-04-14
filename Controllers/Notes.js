const Notes = require("../Modals/Notes");


exports.getNotes=(req,res)=>{
    
        Notes.find().then(result=>{
        res.status(200).json({
            message: `Notes Fetched Successfully`,
           notes:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}