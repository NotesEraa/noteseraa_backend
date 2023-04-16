const Papers = require("../Modals/Papers");


exports.getPapers=(req,res)=>{
    
        Papers.find().then(result=>{
        res.status(200).json({
            message: `Papers Fetched Successfully`,
           papers:result,
           status:200
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error,
            status:500
        });
       })
}