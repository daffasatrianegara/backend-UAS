const { UsersModel, UserModel, AdminModel, TodoModel } = require("../models");
const { UsersSeeder, UserSeeder, AdminSeeder, TodoSeeder } = require('../seeders')

const migrateTables = async () => {
    await UsersModel.sync({ force: true });
    await UserModel.sync({ force: true });
    await AdminModel.sync({ force: true });
    await TodoModel.sync({ force: true });
}

const seedData = async () => {
    await UsersSeeder()
    await AdminSeeder()
    await UserSeeder()
    await TodoSeeder()
}

const migrateDB = async () => {
    try {
        await migrateTables()
        await seedData()
        const response = {message: "Database migrating successfully."}
        return response
    } catch(error) {
        throw new Error('Error migrating tables:', error)
    }
}

migrateDB()
