const { Router } = require('express');
const { AdminController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = Router()

router.get('/users', authMiddleware.authToken, AdminController.getAllUsers)
router.get('/todos', authMiddleware.authToken, AdminController.getAllTodos)
router.delete('/user/:id', authMiddleware.authToken, AdminController.deleteUser)
router.delete('/todo/:id', authMiddleware.authToken, AdminController.deleteTodo)

module.exports = router