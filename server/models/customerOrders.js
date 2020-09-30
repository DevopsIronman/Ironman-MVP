

module.exports = function (sequelize, DataTypes) {
    let CustomerOrders = sequelize.define('CustomerOrders', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
       customerName: {
            type: DataTypes.STRING(250),
            field: 'customer_name'
        },
        address: {
            type: DataTypes.STRING(250),
            field: 'address'
        },
        geoLocation: {
            type: DataTypes.STRING(250),
            field: 'geoLocation'
        },
        productsOrdered: {
            type: DataTypes.STRING(250),
            field: 'products_ordered'
        },
        serviceDue: {
            type: DataTypes.DATE,
            field: 'service_due'
        },
        serviceFrequency: {
            type: DataTypes.STRING(250),
            field: 'service_frequency'
        },
        quantity: {
            type: DataTypes.INTEGER(11),
            field: 'quantity'
        },
        mobileNo: {
            type: DataTypes.STRING(11),
            field: 'mobile_no'
        },
        createdBy: {
            type: DataTypes.STRING(50),
            field: 'created_by'
        },
        updatedBy: {
            type: DataTypes.STRING(50),
            field: 'updated_by'
        },
        deletedBy: {
            type: DataTypes.STRING(50),
            field: 'deleted_by'
        },
        deleteStatus:
        {
            type: DataTypes.BOOLEAN,
            field: 'delete_status',
            defaultValue: false
        },

    },
        {
            timestamps: true,
            tableName: 'CustomerOrders'
        })

       
        CustomerOrders.associate = function(models) {
            // CustomerOrders.belongsTo(models.Product1, { foreignKey: 'prd1Id'})
            // CustomerOrders.belongsTo(models.Product2, { foreignKey: 'prd2Id'})
            // CustomerOrders.belongsTo(models.Product3, { foreignKey: 'prd3Id'})
            // CustomerOrders.belongsTo(models.Product4, { foreignKey: 'prd4Id'})
            // CustomerOrders.belongsTo(models.Product5, { foreignKey: 'prd5Id'})
            
    }

    return CustomerOrders
}