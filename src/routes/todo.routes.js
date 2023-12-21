const { Router } = require('express');
const { TodoController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = Router()

router.get('/:id', authMiddleware.authToken, TodoController.getTodosByUserId)
router.get('/detail/:id', authMiddleware.authToken, TodoController.getDetailTodo)
router.post('/:id', authMiddleware.authToken, TodoController.addTodo)
router.put('/update/:id', authMiddleware.authToken, TodoController.updateTodo)
router.delete('/delete/:id', authMiddleware.authToken, TodoController.deleteTodo)

module.exports = router