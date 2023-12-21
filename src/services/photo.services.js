const { PhotoRepo } = require('../repositories')

const updatePhoto = async (data) => {
    const { id, photo_profile } = data
    if(!id && !photo_profile) {
        throw new Error('Some value null');
    }
    const update = await PhotoRepo.updatePhoto({ id, photo_profile })
    return update
}

module.exports = {
    updatePhoto
}