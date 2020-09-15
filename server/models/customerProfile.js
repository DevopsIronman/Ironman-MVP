
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
        paymentType: {
            type: DataTypes.STRING(250),
            field: 'payment_type'
        },
        deliveryTypeTime: {
            type: DataTypes.STRING(250),
            field: 'delivery_type_time'
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
            type: DataTypes.DATE,
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