const CollegeNotification = require("../Modals/CollegeNotification");


exports.getCollegenotification=(req,res)=>{
    
        Collegenotification.find().then(result=>{
        res.status(200).json({
            message: `Notifications Fetched Successfully`,
           notifications:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}