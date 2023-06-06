const Papers = require("../Modals/Papers");
const PostReqPapersData = require("../Modals/PostReqPapersData");

exports.getPapers=(req,res)=>{
    const {
        subject,
        semester,
        program,
        type
        
    } = req.body;
        searchObj = {}
        if (subject){
            searchObj['subject'] = subject
        }
        if (semester){
            searchObj['semester'] = semester
        }
        if (type){
            searchObj['type']=type
        }
        if (program){
            searchObj['program'] = program
        }
        console.log(searchObj);
        console.log("------");
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
         // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        // current year
        let year = date_ob.getFullYear();
        let date_ = year + "-" + month + "-" + date;
        const papersObj = new PostReqPapersData({
            subject : searchObj.subject,
            semester : searchObj.semester,
            program: searchObj.program,
            date: date_
        });
        papersObj.save();
        Papers.find(searchObj).then(result=>{
        console.log(result)
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

exports.addPaper=(req,res)=>{
    //write add method
    const {
        subject,
        semester,
        program,
        link,
        year,
        type
    } = req.body;
    
    const paperObj = new Papers({
        subject: subject,
        semester : semester,
        program : program,
        link : link,
        year : year,
        type : type
    });

    console.log(paperObj);
    // we will call a save method on this object
    paperObj.save().then(result => {
        res.status(200).json({
            message: "Paper added successfully !!",
            paper: result,
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