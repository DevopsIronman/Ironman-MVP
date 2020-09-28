const express = require('express')
const router = express.Router()

const { CreateLead , ConvertedLead, CustomerOrders, CustomerProfile} = require('../models');
// const {convertedLead} = require('../models');

function sendError(res, err) {
    var result = {
        "success": false,
        "error": err,
       
    };
    return res.json(result);
}

function sendSuccess(res, result) {
    var finalResult = {
        "success": true,
        "data": result
    };
    return res.json(finalResult);
}


router.get('/', (req, res) => {
    return new Promise((resolve, reject) => {
        CreateLead.findAll({ where: { deleteStatus: false, convertedStatus: ["new", "converted"] },  }).then(function (result) {
            sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
    })
})
router.get('/customer', (req, res) => {
    return new Promise((resolve, reject) => {
        CustomerOrders.findAll({ where: { deleteStatus: false },  }).then(function (result) {
            sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
    })
})

router.post('/', (req, res) => {
    return new Promise((resolve, reject) => {
        req.body.convertedStatus = "new";
        CreateLead.create(req.body).then(function (result) {
            sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
    });
});

router.post('/convertLead', (req, res) => {
    return new Promise((resolve, reject) => {
        CreateLead.update({convertedStatus: "converted"}, { where: { id: req.body.createdLeadId } }).then(function (result) {
            ConvertedLead.create(req.body).then(function (result) {
              sendSuccess(res, result);
            }).catch(function (err) {
               sendError(res, err);
            });
        }).catch(function (err) {
            sendError(res, err);
        });
    });
});

router.post('/customerProfile', (req, res) => {
    return new Promise((resolve, reject) => { 
        CreateLead.update({convertedStatus: "completed"}, { where: { id: req.body.createdLeadId } }).then(function (Leadres) {
            CustomerProfile.create(req.body).then(function (result) {
                CreateLead.findOne({ where: { id: req.body.createdLeadId },  }).then(function (Leadresult) {
                    ConvertedLead.findOne({ where: { id: req.body.convertedLeadId },  }).then(function (convResult) {
                        let date = new Date();
                        date.setDate(date.getDate() + parseInt(convResult.serviceFrequency));
                        let serviceDue = date.toISOString();
                    
                        customerdetails ={
                            customerName: Leadresult.customerName,
                            address: Leadresult.customerLocation,
                            productsOrdered : result.purchaseOrder,
                            serviceFrequency : convResult.serviceFrequency,
                            mobileNo : Leadresult.mobileNo,
                            serviceDue: serviceDue,
                            quantity: result.quantity
                        }
                        
                        CustomerOrders.create(customerdetails).then(function (custresult) {
                            sendSuccess(res, Leadresult);
                        });
                    });
                    
                })
            // sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
        }).catch(function (err) {
            sendError(res, err);
        });
    });
});


module.exports = router;
