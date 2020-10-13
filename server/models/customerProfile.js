
module.exports = function (sequelize, DataTypes) {
    let CustomerProfile = sequelize.define('CustomerProfile', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        purchaseOrder: {
            type: DataTypes.STRING(250),
            field: 'purchase_order'
        },
        productName: {
            type: DataTypes.STRING(250),
            field: 'product_name'
        },
        quantity : {
            type: DataTypes.STRING(250),
            field: 'quantity'
        },
        advance : {
            type: DataTypes.STRING(250),
            field: 'advance'
        },
        remaining : {
            type: DataTypes.STRING(250),
            field: 'remaining'
        },
        paymentType: {
            type: DataTypes.STRING(250),
            field: 'payment_type'
        },
        deliveryTypeTime: {
            type: DataTypes.STRING(250),
            field: 'delivery_type_time'
        },
        createdLeadId:{
            type:DataTypes.INTEGER(11).UNSIGNED,
            field:'created_lead_id',
        },
        convertedLeadId:{
            type:DataTypes.INTEGER(11).UNSIGNED,
            field:'converted_lead_id',
        },
        techLead: {
            type: DataTypes.STRING(250),
            field: 'tech_lead'
        },
        serviceReport: {
            type: DataTypes.STRING(250),
            field: 'service_report'
        },
        customerFeedback: {
            type: DataTypes.STRING(250),
            field: 'cust_feedback'
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
            tableName: 'customer_profile'
        })

       
        CustomerProfile.associate = function(models) {
            CustomerProfile.belongsTo(models.CreateLead, { foreignKey: 'createdLeadId'})
            CustomerProfile.belongsTo(models.ConvertedLead, { foreignKey: 'convertedLeadId'})

    }

    return CustomerProfile
}