const Articles = require("../Modals/Articles");


exports.getArticles=(req,res)=>{
    
        Articles.find().then(result=>{
        res.status(200).json({
            message: `Articles Fetched Successfully`,
           articles:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}