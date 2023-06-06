const Communitynotification = require("../Modals/CommunityNotification");


exports.getCommunitynotification=(req,res)=>{
    
        Communitynotification.find().then(result=>{
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

exports.addCommunityNotification=(req,res)=>{
    //write add method
    const {
        date,
        title,
        description,
        contact,
        link,
    } = req.body;
    
    const notificationObj = new Communitynotification({
        date: date,
        title : title,
        description : description,
        contact : contact,
        link : link,
    });

    console.log(notificationObj);
    // we will call a save method on this object
    notificationObj.save().then(result => {
        res.status(200).json({
            message: "notification added successfully !!",
            notification: result,
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