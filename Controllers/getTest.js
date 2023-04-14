exports.getData=(req,res)=>{   
        res.status(200).json({
            message: `Filtered Results fetched`,
            result:"running app"
        });
   
       
}