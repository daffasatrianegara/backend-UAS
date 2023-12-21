const { TodoService } = require('../services')

const getTodosByUserId = async (req, res) => {
    const id = req.params.id
    try {
        const result = await TodoService.getAllTodosById(id)
        res.json({ message : 'success', data : result })
    } catch(error) {
        res.json({ message: error.message });
    }
}

const getDetailTodo = async (req, res) => {
    const id = req.params.id
    try {
        const result = await TodoService.getDetailTodo(id)
        res.json({ message : 'success', data : result })
    } catch(error) {
        res.json({ message: error.message });
    }
}

const addTodo = async (req, res) => {
    const id = req.params.id
    const { todo, description } = req.body
    try {
        const result = await TodoService.addTodo(id, { todo, description })
        res.json({ message : 'success', data : result})
    } catch(error) {
        res.json({ message: error.message });
    }
}

const updateTodo = async (req, res) => {
    const id = req.params.id
    const { todo, description } = req.body
    try {
        const result = await TodoService.updateTodo(id, { todo, description })
        res.json({ message : 'data todo updating successfully'})
    } catch(error) {
        res.json({ message: error.message });
    }
}

const deleteTodo = async (req, res) => {
    const id = req.params.id
    try {
        await TodoService.deleteTodo(id)
        res.json({ message : 'data todo deleted successfully'})
    } catch(error) {
        res.json({ message: error.message });
    }
}

module.exports = {
    getTodosByUserId,
    getDetailTodo,
    addTodo,
    updateTodo,
    deleteTodo
}