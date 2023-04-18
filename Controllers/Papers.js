const Papers = require("../Modals/Papers");


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