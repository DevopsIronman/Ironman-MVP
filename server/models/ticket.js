
module.exports = function (sequelize, DataTypes) {
    let Ticket = sequelize.define('ConvertedLead', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        
        incidentNumber: {
            type: DataTypes.STRING(250),
            field: 'incident_number'
        },
        
        createdLeadId:{
            type:DataTypes.INTEGER(11).UNSIGNED,
            field:'created_lead_id',
        },
        convertedLeadId:{
            type:DataTypes.INTEGER(11).UNSIGNED,
            field:'converted_lead_id',
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
            tableName: 'ticket'
        })

       
        Ticket.associate = function(models) {
            Ticket.belongsTo(models.CreateLead, { foreignKey: 'createdLeadId'})
            Ticket.belongsTo(models.ConvertedLead, { foreignKey: 'convertedLeadId' })

    }

    return Ticket
}