const Collegenotification = require("../Modals/CollegeNotification");


exports.getCollegenotification=(req,res)=>{
    const title = req.params.tag;

    Collegenotification.find({'title':title}).then(result=>{
        res.status(200).json({
            message: `Notification Fetched Successfully`,
            notifications:result,
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