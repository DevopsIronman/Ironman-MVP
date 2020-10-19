var express = require('express')
const router = express.Router()


router.use('/auth', require('./user'))
router.use('/createLead', require('./createLead'))

 
module.exports = router;
