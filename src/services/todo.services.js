const { TodoRepo } = require('../repositories')

const getAllTodosById = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Invalid id"));
    }
    const response = await TodoRepo.getAllTodosById(id)
    if(!response) {
        return Promise.reject(new Error("Not Found"));
    }
    return response
}

const getDetailTodo = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Invalid id"));
    }

    const response = await TodoRepo.getDetailTodo(id)
    if(!response) {
        return Promise.reject(new Error('Not Found'))
    }
    return response
}

const addTodo = async (id, data) => {
    const { todo, description } = data
    if(!todo) {
        throw new Error("Todo value null");
    }
    const response = await TodoRepo.addTodo(id, { todo, description })
    return response
}

const updateTodo = async (id, data) => {
    if(!id) {
        return Promise.reject(new Error("Invalid id"));
    }
    const { todo, description } = data
    if(!todo) {
        throw new Error("Todo value null");
    }
    const response = await TodoRepo.updateTodo(id, { todo, description })
    return response
}

const deleteTodo = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Invalid id"));
    }
    const response = await TodoRepo.deleteTodo(id)
    return response
}

module.exports = {
    getAllTodosById,
    getDetailTodo,
    addTodo,
    updateTodo,
    deleteTodo
}