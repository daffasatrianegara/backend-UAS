const { DataTypes } = require('sequelize');
const { db } = require('../config');
const Users = require('./users.models');

const User = db.define(
    'user',
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        photo_profile: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('M', 'F'),
            allowNull: false
        },
        place: {
            type: DataTypes.STRING(50)
        },
    },
    {
        tableName: 'user',
        freezeTableName: true,
        timestamps: true
    }
)

User.belongsTo(Users, {foreignKey: "user_id"})

module.exports = User