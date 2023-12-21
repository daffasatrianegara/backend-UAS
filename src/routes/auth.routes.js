const { Router } = require('express');
const { AuthController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = Router()

router.post('/login', AuthController.login)
router.post('/register', AuthController.registerUser)
router.post('/add-admin', authMiddleware.authToken, AuthController.registerAdmin)

module.exports = router