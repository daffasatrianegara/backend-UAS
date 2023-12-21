const { AdminRepo } = require('../repositories')
const bcrypt = require('bcrypt')

const getAllUser = async () => {
    const response = await AdminRepo.getAllUser()
    return response
}

const deleteUser = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Invalid id"));
    }

    const response = await AdminRepo.deleteUser(id)
    return response
}

const getAllTodos = async () => {
    const response = await AdminRepo.getAllTodos()
    return response
}

const deleteTodo = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Invalid id"));
    }

    const response = await AdminRepo.deleteTodo(id)
    return response
}

const addAdmin = async (data) => {
    const { email, password } = data
    const { username, phone_number } = data
    if(!email && !password && !username && !phone_number) {
        throw new Error("Some value null");
    }
    const hashPass = bcrypt.hashSync(password, 10)
    const response = await AdminRepo.addAdmin({email, password: hashPass, username, phone_number})
    return response
}

module.exports = {
    getAllUser,
    deleteUser,
    getAllTodos,
    deleteTodo,
    addAdmin
}