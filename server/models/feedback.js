

module.exports = function (sequelize, DataTypes) {
    let Feedback = sequelize.define('Feedback', {

        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        customerName: {
            type: DataTypes.STRING(250),
            field: 'customer_Name'
        },
        companyName: {
            type: DataTypes.STRING(250),
            field: 'company_Name'
        },
        email: {
            type: DataTypes.STRING(250),
            field: 'email'
        },
        mobileNo: {
            type: DataTypes.STRING(250),
            field: 'mobile_No'
        },
        rate: {
            type: DataTypes.STRING(250),
            field: 'rate'
        },
        satisfied: {
            type: DataTypes.STRING(250),
            field: 'satisfied'
        },
        accessibleManner: {
            type: DataTypes.STRING(250),
            field: 'accessibleManner'
        },
        problem: {
            type: DataTypes.STRING(250),
            field: 'problem'
        },
        satisfiedComments: {
            type: DataTypes.STRING(250),
            field: 'satisfied_comments'
        },
        accessibleMannerComments: {
            type: DataTypes.STRING(250),
            field: 'accessible_manner_comments'
        },
        problemComments: {
            type: DataTypes.STRING(250),
            field: 'problem_comments'
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
            tableName: 'feedback'
        })

       

    return Feedback
}