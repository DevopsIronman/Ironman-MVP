// const config = require("./../config");

let configExport = {};

configExport.dbConfig = {
    'username': 'root',
    'password': '',
    'database': 'pagupu-crm',
    'host': 'localhost',
    'dialect': 'mysql',
    //logging: false,
    define: {
        timestamps: false
    }
}


module.exports = configExport