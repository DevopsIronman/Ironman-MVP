
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
        companyName: {
            type: DataTypes.STRING(250),
            field: 'company_name'
        },
        address: {
            type: DataTypes.STRING(250),
            field: 'address'
        },
        city: {
            type: DataTypes.STRING(250),
            field: 'city'
        },
        state: {
            type: DataTypes.STRING(250),
            field: 'state'
        },
        pincode: {
            type: DataTypes.STRING(250),
            field: 'pincode'
        },
        gstIn: {
            type: DataTypes.STRING(250),
            field: 'gst_in'
        },
        breakingSizeVariety: {
            type: DataTypes.STRING(250),
            field: 'breaking_size_variety'
        },
        excavatorModel: {
            type: DataTypes.STRING(250),
            field: 'excavator_model'
        },
        backhoeLoader: {
            type: DataTypes.STRING(250),
            field: 'backhoe_loader'
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
        leadAssigned:{
            type:DataTypes.STRING(250),
            field:'lead_assigned_to',
        },
        convertedStatus:{
            type:DataTypes.STRING(250),
            field:'converted_status',
        },

        
        mobileNo:{
            type:DataTypes.STRING(10),
            field:'mobile_no',
        },
        mobileNo2:{
            type:DataTypes.STRING(10),
            field:'mobile_no2',
        },
        mailId:{
            type:DataTypes.STRING(250),
            field:'mail_id',
        },
        mailId:{
            type:DataTypes.STRING(250),
            field:'mail_id2',
        },
        
        createdBy: {
            type: DataTypes.STRING(50),
            field: 'created_by'
        },
        recommendedBreaker: {
            type: DataTypes.STRING(50),
            field: 'recommended_breaker'
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
            CreateLead.hasMany(models.Ticket, { foreignKey: 'createdLeadId' })

    }
  
    return CreateLead
}