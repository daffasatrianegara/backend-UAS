const { AdminService } = require('../services')

const getAllUsers = async (req, res) => {
    try {
        const result = await AdminService.getAllUser()
        res.json({message : 'success', data : result})
    } catch(error) {
        res.json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await AdminService.deleteUser(id)
        res.json({ message : 'user deleted successfully'})
    } catch(error) {
        res.json({ message: error.message });
    }
}

const getAllTodos = async (req, res) => {
    try {
        const result = await AdminService.getAllTodos()
        res.json({message : 'success', data : result})
    } catch(error) {
        res.json({ message: error.message });
    }
}

const deleteTodo = async (req, res) => {
    const id = req.params.id
    try {
        await AdminService.deleteTodo(id)
        res.json({ message : 'data todo deleted successfully'})
    } catch(error) {
        res.json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    getAllTodos,
    deleteTodo
}