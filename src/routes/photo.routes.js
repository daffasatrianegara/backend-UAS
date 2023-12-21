const { Router } = require('express');
const { PhotoController } = require('../controllers')
const { authMiddleware, photoStorage } = require('../middlewares')
const path = require('path');

const router = Router()
const upload = photoStorage.uploadPhoto
const uploadPath = path.join(__dirname, '../../public/uploads/');

router.put('/:id', authMiddleware.authToken, upload.single('file'), PhotoController.uploadPhoto)
router.use('/:filename', (req, res) => {
    const filePath = path.join(
        uploadPath,
        req.params.filename
    )
    res.sendFile(filePath, (error) => {
        if(error) {
            console.error(error);
            res.status(error.status).end();
        }
    })
})

module.exports = router