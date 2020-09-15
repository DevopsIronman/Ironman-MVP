var express = require('express')
const router = express.Router()


router.use('/createLead', require('./createLead'))

 
module.exports = router;
