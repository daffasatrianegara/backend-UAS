const { UsersRepo } = require('../repositories')

const getUsersById = async (id) => {
    if(!id) {
        return Promise.reject(new Error('Invalid id'))
    }
    const response = await UsersRepo.getUsersById(id)
    if(!response) {
        return Promise.reject(new Error('Not Found'))
    }
    return response
}

module.exports = {
    getUsersById
}