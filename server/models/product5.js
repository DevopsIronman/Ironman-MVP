

module.exports = function (sequelize, DataTypes) {
    let Product5 = sequelize.define('Product5', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        productSerialNumber: {
            type: DataTypes.STRING(250),
            field: 'product_serial_number'
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'name'
        },
        descripion: {
            type: DataTypes.STRING(250),
            field: 'description'
        },
        serviceFrequency: {
            type: DataTypes.STRING(250),
            field: 'service_frequency'
        },
        specification: {
            type: DataTypes.STRING(250),
            field: 'specification'
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
            tableName: 'product5'
        })

       
        Product5.associate = function(models) {
            Product5.hasMany(models.CustomerOrders, { foreignKey: 'prd1Id'})
    }

    return Product5
}