const Notes = require("../Modals/Notes");


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

        Notes.find(searchObj).then(result=>{
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