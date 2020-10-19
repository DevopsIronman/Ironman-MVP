const express = require('express');
const router = express.Router()

const { CreateLead , ConvertedLead, Ticket, CustomerOrders, CustomerProfile} = require('../models');
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
router.get('/lead/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        CreateLead.findAll({ where: { deleteStatus: false, id: req.params.id },  }).then(function (result) {
            sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
    })
})
router.get('/ConvertedLead/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        ConvertedLead.findAll({ where: { deleteStatus: false, createdLeadId: req.params.id },  }).then(function (result) {
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

router.get('/customerDetails/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        CustomerOrders.findOne({ where: { deleteStatus: false , id:req.params.id },  }).then(function (custResult) {
            CreateLead.findOne({ where: { deleteStatus: false,  customerName:  custResult.customerName, mobileNo: custResult.mobileNo}, include: [ConvertedLead, CustomerProfile ], }).then(function (result) {
                sendSuccess(res, result);
            }).catch(function (err) {
                sendError(res, err);
            }); 
            // sendSuccess(res, custResult);
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

router.put('/updateNewLead/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        // req.body.convertedStatus = "new";
        CreateLead.update(req.body , { where: { id: req.params.id } }).then(function (result) {
            sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
    });
});

router.put('/updateConvertedLead/:id', (req, res) => {
    return new Promise((resolve, reject) => {
        // req.body.convertedStatus = "new";
        ConvertedLead.update(req.body , { where: { id: req.params.id } }).then(function (result) {
            sendSuccess(res, result);
        }).catch(function (err) {
            sendError(res, err);
        });
    });
});

router.post('/convertLead', (req, res) => {
    return new Promise((resolve, reject) => {
        CreateLead.update({convertedStatus: "converted"}, { where: { id: req.body.createdLeadId } }).then(function (leadResult) {
            ConvertedLead.create(req.body).then(function (result) {
            //   sendSuccess(res, result);
            if(result.callBack =='yes') {
                data ={
                    convertedLeadId: result.id,
                    createdLeadId: req.body.createdLeadId,
                }
                data.incidentNumber = 'INC000'+new Date().getFullYear()+(new Date().getMonth()+ 1)+new Date().getDate()+'-'+req.body.createdLeadId;
                Ticket.create(data).then(function (res) {
                    sendSuccess(res, result);
                })           } else {
                    sendSuccess(res, result);
                }
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
                            createdLeadId: req.body.createdLeadId,
                            customerName: Leadresult.customerName,
                            companyName: Leadresult.companyName,
                            address: Leadresult.customerLocation,
                            city: Leadresult.city,
                            state: Leadresult.state,
                            pincode: Leadresult.pincode,
                            gstIn: Leadresult.gstIn,
                            productsOrdered : result.productName,
                            serviceFrequency : convResult.serviceFrequency,
                            price : convResult.price,
                            serviceFrequency : convResult.serviceFrequency,
                            mobileNo : Leadresult.mobileNo,
                            serviceDue: serviceDue,
                            quantity: result.quantity,
                            advance: result.advance,
                            remaining: result.remaining
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
