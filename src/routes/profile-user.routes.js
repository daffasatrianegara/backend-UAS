const { Router } = require('express');
const { ProfileController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = Router()

router.get('/:id', authMiddleware.authToken, ProfileController.getProfile)
router.put('/:id', authMiddleware.authToken, ProfileController.updateProfile)

module.exports = router