const Notes = require("../Modals/Notes");
const PostReqNotesData = require("../Modals/PostReqNotesData");

exports.getNotes=(req,res)=>{
    const {
        subject,
        semester,
        program,
        
    } = req.body;
        searchObj = {}
        if (subject){
            searchObj['subject'] = subject
        }
        if (semester){
            searchObj['semester'] = semester
        }
        if (program){
            searchObj['program'] = program
        }
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
         // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        // current year
        let year = date_ob.getFullYear();
        let date_ = year + "-" + month + "-" + date;
        const notesObj = new PostReqNotesData({
            subject : searchObj.subject,
            semester : searchObj.semester,
            program: searchObj.program,
            date: date_
        });
        notesObj.save();
        
        Notes.find(searchObj).then(result=>{
        // PostReqData.updateOne(
        //         { _id: '64782bdeba779a88e451e79a'},
        //         { $push: { notes: searchObj } }
        //     )
        res.status(200).json({
           message: `Notes Fetched Successfully`,
           notes:result,
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