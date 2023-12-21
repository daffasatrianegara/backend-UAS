const bcrypt = require('bcrypt')
const { UsersModel } = require('../models')

const Users = []

const createUsers = async (email, password, role) => {
    const hashPass = await bcrypt.hashSync(password, 10)
    const users = {email, password : hashPass, role}
    Users.push(users)
}

createUsers('admin@gmail.com', '123', 'admin')
createUsers('daffa@gmail.com', '123')
createUsers('dian@gmail.com', '123')


const seedUsers = async () => {
    try {
        const seed = await UsersModel.bulkCreate(Users)
        if(seed) {
            const response = {message : "Users seed data inserted successfully."}
            return response
        }
    } catch(error) {
        throw new Error('Error seeding users data:', error)
    }
}

module.exports = seedUsers