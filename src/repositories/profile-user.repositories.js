const { UsersModel, UserModel } = require('../models')

const getProfile = async (id) => {
    let dataProfile
    const dataUser = await UsersModel.findOne({
        where: {
            id : id,
            role : 'user'
        },
        attributes: ['id', 'email']
    })
    if(dataUser) {
        dataProfile = await UserModel.findByPk(id)
    }
    return {dataUser, dataProfile}
}

const addUsers = async (params) => {
    const { email, password } = params
    const { username, photo_profile, gender, phone_number, place } = params
    const users = await UsersModel.create({
        email : email,
        password : password
    })

    const users_id = users.id

    const user = await UserModel.create({
        user_id : users_id,
        photo_profile : photo_profile,
        username : username,
        gender : gender,
        phone_number : phone_number,
        place : place
    })

    return { users, user }
}

const updateProfile = async (id, params) => {
    const { email, password } = params
    const { username, gender, phone_number, place } = params
    await UsersModel.update({
        email : email,
        password : password
    }, {
        where: {
            id : id
        }
    })
    await UserModel.update({
        username : username,
        gender : gender,
        phone_number : phone_number,
        place : place
    }, {
        where: {
            user_id : id
        }
    })
}

module.exports = {
    getProfile,
    addUsers,
    updateProfile
}

