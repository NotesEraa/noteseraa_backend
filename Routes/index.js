const express=require('express');
const router=express.Router()

const testdata=require('../Controllers/getTest.js');
const users = require('../Controllers/Users.js');
const papers = require('../Controllers/Papers.js');

router.get('/',testdata.getData)

router.get('/users',users.getUsers);
router.get('/papers',papers.getPapers);

// export the router
module.exports = router; 