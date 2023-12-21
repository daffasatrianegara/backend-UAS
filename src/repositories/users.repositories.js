const { UsersModel } = require('../models')

const getUsersByEmail = async (email) => {
    return UsersModel.findOne({
        where: {
            email : email
        }
    })
}

const getUsersById = async(id) => {
    return UsersModel.findByPk(id)
}

module.exports = {
    getUsersByEmail,
    getUsersById
}