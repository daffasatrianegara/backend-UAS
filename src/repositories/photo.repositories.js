const { UserModel } = require('../models')

const updatePhoto = async (params) => {
    const { id, photo_profile } = params
    const update = await UserModel.update({
        photo_profile : photo_profile
    }, {
        where : {
            user_id : id
        }
    })
    return update
}

module.exports = {
    updatePhoto,
}