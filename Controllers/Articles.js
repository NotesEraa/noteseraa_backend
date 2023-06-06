const Articles = require("../Modals/Articles");


exports.getArticles=(req,res)=>{
    
        Articles.find().then(result=>{
        res.status(200).json({
            message: `Articles Fetched Successfully`,
           articles:result,
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

exports.getRecentArticle=(req,res)=>{
    
    Articles.find().then(result=>{
    res.status(200).json({
        message: `Articles Fetched Successfully`,
       articles:result[0],
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


exports.addArticle=(req,res)=>{
    //write add method
    const {
        
        title,
        date,
        author,
        description,
        img_url
    } = req.body;
    
    const articleObj = new Articles({
       title:   title,
       date: date,
       author: author,
       description: description,
       img_url: img_url
    });

    console.log(articleObj);
    // we will call a save method on this object
    articleObj.save().then(result => {
        res.status(200).json({
            message: "article added successfully !!",
            article: result,
            status:200
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error,
            status:500
        });
    });
}