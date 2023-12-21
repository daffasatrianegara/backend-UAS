const { UsersRepo } = require('../repositories')
const { secretKey } = require('../config');
const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const login = async (data) => {
    const { email, password } = data
    if(!email && !password) {
        throw new Error("some value null");
    }
    const checkEmail = await UsersRepo.getUsersByEmail(email) 
    if(!checkEmail) {
        throw new Error("email not found");
    }
    const checkPass = compareSync(password, checkEmail.dataValues.password)
    if(!checkPass) {
        throw new Error("password incorrect");
    }

    const authUser = { id : checkEmail.dataValues.id, role : checkEmail.dataValues.role }
    const token = sign(authUser, secretKey, { expiresIn : '15h' })
    return token
}

module.exports = {
    login
}