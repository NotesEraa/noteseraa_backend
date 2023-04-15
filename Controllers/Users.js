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

exports.addUser=(req,res)=>{
    //write add method
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;
    console.log(first_name)
    const userObj = new Users({
        
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    });

    console.log(userObj);
    // we will call a save method on this object
    userObj.save().then(result => {
        res.status(200).json({
            message: "User Registered successfully !!",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}

exports.getLogin=(req,res)=>{
    //write login method
    const {
        email,
        password
    } = req.body;
    Users.find({
        email: email,
        password: password
     } ).then(result => {
        if (result.length > 0) {
            res.status(200).json({
                message: "User logged in successfully !!",
                isLoggedIn: true,
                user: result[0]
            });
        } else {
            res.status(400).json({
                message: "Username or password is wrong",
                isLoggedIn: false
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}
