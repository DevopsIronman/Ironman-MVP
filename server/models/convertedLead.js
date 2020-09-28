
module.exports = function (sequelize, DataTypes) {
    let ConvertedLead = sequelize.define('ConvertedLead', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        recommendedBreaker: {
            type: DataTypes.STRING(250),
            field: 'recommended_breaker'
        },
        price: {
            type: DataTypes.STRING(250),
            field: 'price'
        },
        warranty: {
            type: DataTypes.STRING(250),
            field: 'warranty'
        },
        serviceFrequency: {
            type: DataTypes.STRING(250),
            field: 'service_frequency'
        },
        lead: {
            type: DataTypes.STRING(250),
            field: 'lead'
        },
        machineCapacity: {
            type: DataTypes.DATE,
            field: 'machine_capacity'
        },
        followUpTask: {
            type: DataTypes.DATE,
            field: 'follow_up_task'
        },
        result: {
            type: DataTypes.STRING(250),
            field: 'result'
        },
        createdLeadId:{
            type:DataTypes.INTEGER(11).UNSIGNED,
            field:'created_lead_id',
        },


        quoteOrInvoice:{
            type:DataTypes.STRING(250),
            field:'quoteOrInvoice',
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
            tableName: 'converted_lead'
        })

       
        ConvertedLead.associate = function(models) {
            ConvertedLead.belongsTo(models.CreateLead, { foreignKey: 'createdLeadId'})
            ConvertedLead.hasMany(models.CustomerProfile, { foreignKey: 'convertedLeadId' })

    }

    return ConvertedLead
}