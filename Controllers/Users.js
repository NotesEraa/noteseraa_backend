const Users = require("../Modals/Users");

exports.getUsers=(req,res)=>{
    
    Users.find().then(result=>{
        res.status(200).json({
            message: `Filtered Results fetched`,
           patient:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}
