const { DataTypes } = require('sequelize');
const { db } = require('../config');
const User = require('./user.models')

const Todo = db.define(
    'todo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        todo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        }
    }, {
        tableName: 'todo',
        freezeTableName: true,
        timestamps: true
    }
)

Todo.belongsTo(User, { foreignKey: "user_id" })

module.exports = Todo