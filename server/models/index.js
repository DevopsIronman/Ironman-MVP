const Sequelize = require('sequelize')
const { dbConfig } = require('../startup')
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

let models = {};
// models.SampleData = require("./sampledata.js")(sequelize, Sequelize);
models.CreateLead = require("./createdLead.js")(sequelize, Sequelize);
models.ConvertedLead = require("./convertedLead.js")(sequelize, Sequelize);
models.CustomerProfile = require("./customerProfile.js")(sequelize, Sequelize);
models.CustomerOrders = require("./customerOrders.js")(sequelize, Sequelize);
models.Product1 = require("./product1.js")(sequelize, Sequelize);
models.Product2 = require("./product2.js")(sequelize, Sequelize);
models.Product3 = require("./product3.js")(sequelize, Sequelize);
models.Product4 = require("./product4.js")(sequelize, Sequelize);
models.Product5 = require("./product5.js")(sequelize, Sequelize);
models.Ticket = require("./ticket.js")(sequelize, Sequelize);
models.User = require("./user.js")(sequelize, Sequelize);
models.Feedback = require("./feedback.js")(sequelize, Sequelize);

models.User.sync({});

models.CreateLead.sync();
models.ConvertedLead.sync();
models.CustomerProfile.sync();
models.CustomerOrders.sync();
models.Product1.sync();
models.Product2.sync();
models.Product3.sync();
models.Product4.sync();
models.Product5.sync();
models.Ticket.sync();
models.Feedback.sync();

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models)
    }
})


models.Sequelize = Sequelize
models.sequelize = sequelize

module.exports = models;