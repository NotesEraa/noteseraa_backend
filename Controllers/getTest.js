exports.getData=(req,res)=>{   
        res.status(200).json({
            message: `Filtered Results fetched`,
            result:"running app",
            routes_available:[
                {"title":"get('/users',users.getUsers"},
                {"title":"post('/signup',users.addUser)"},
                {"title":"post('/login',users.getLogin)"},
                {"title":"get('/papers',papers.getPapers)"},
                {"title":"get('/communitynotification',communitynotification.getCommunitynotification)"},
                {"title":"get('/collegenotification/:tag',collegenotification.getCollegenotification)"},
                {"title":"get('/recentarticle',articles.getRecentArticle)"},
                {"title":"get('/articles',articles.getArticles)"},
                {"title":"post('/notes',notes.getNotes)"},
            ]
        });
   
       
}