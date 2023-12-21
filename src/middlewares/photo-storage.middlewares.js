const multer = require('multer');
const path = require('path');

const photoStorage = (req, file,cb) => {
    const userUploadPath = path.join(__dirname, '../../public/uploads')
    cb(null, userUploadPath)
}

const uploadPhoto = multer({
    limits : {
        fileSize: 15000000
    },
    storage : multer.diskStorage({
        destination: photoStorage,
        filename : (req, file, cb) => {
            cb(null, 'photo-' + Date.now() + path.extname(file.originalname))
        }
    })
})

module.exports = {
    uploadPhoto
}