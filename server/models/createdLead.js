
module.exports = function (sequelize, DataTypes) {
    let CreateLead = sequelize.define('CreateLead', {

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
        customerLocation: {
            type: DataTypes.STRING(250),
            field: 'customer_location'
        },
        breakingSizeVariety: {
            type: DataTypes.STRING(250),
            field: 'breaking_size_variety'
        },
        excavatorModel: {
            type: DataTypes.STRING(250),
            field: 'excavator_model'
        },
        backLoader: {
            type: DataTypes.STRING(250),
            field: 'back_loader'
        },
        machineCapacity: {
            type: DataTypes.STRING(250),
            field: 'machine_capacity'
        },
        machineMakeModel: {
            type: DataTypes.STRING(250),
            field: 'machine_make_model'
        },
        existingBreaker: {
            type: DataTypes.STRING(250),
            field: 'existing_breaker'
        },
        pipelines:{
            type:DataTypes.STRING(250),
            field:'pipelines',
        },

        leadAssignedTo:{
            type:DataTypes.STRING(250),
            field:'lead_assigned_to',
        },
        convertedStatus:{
            type:DataTypes.STRING(250),
            field:'converted_status',
        },

        
        mobileNo:{
            type:DataTypes.INTEGER(11),
            field:'mobile_no',
        },
        mailId:{
            type:DataTypes.STRING(250),
            field:'mail_id',
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
            tableName: 'Create_Lead'
        })

        CreateLead.associate = function (models) {
            CreateLead.hasMany(models.ConvertedLead, { foreignKey: 'createdLeadId' })
            CreateLead.hasMany(models.CustomerProfile, { foreignKey: 'createdLeadId' })
            // CreateLead.hasMany(models.PlanAbstract, { foreignKey: 'drgId' })
            // CreateLead.hasMany(models.MarketPurchase, { foreignKey: 'drgId' })

    }
  
    return CreateLead
}