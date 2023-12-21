const { DataTypes } = require('sequelize');
const { db } = require('../config');
const Users = require('./users.models');

const Admin = db.define(
    'admin', {
        admin_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    }, {
        tableName: 'admin',
        freezeTableName: true,
        timestamps: true
    }
)

Admin.belongsTo(Users, { foreignKey: "admin_id" })

module.exports = Admin