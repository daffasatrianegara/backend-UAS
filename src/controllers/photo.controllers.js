const { PhotoService } = require('../services')

const uploadPhoto = async (req, res) => {
    const id = req.params.id
    const fileDirr = req.file.path;
    const fileName = req.file.filename;
    try {
        await PhotoService.updatePhoto({ id, photo_profile : fileName })
        res.json({ message : 'photo uploaded successfully'})
    } catch(error) {
        res.json({ message: error.message });
    }
}

module.exports = {
    uploadPhoto
}