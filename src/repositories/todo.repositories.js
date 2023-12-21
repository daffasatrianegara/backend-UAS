const { TodoModel, UserModel } = require('../models')

const getAllTodosById = async (id) => {
    const dataTodos = await TodoModel.findAll({
        where: {
            user_id : id
        },
        order: [["updatedAt", "DESC"]]
    })
    return dataTodos
}

const getDetailTodo = async (id) => {
    const detailTodo = await TodoModel.findOne({
        where : {
            id : id,
        }
    })
    return detailTodo
}

const addTodo = async (id, params) => {
    const { todo, description } = params
    const user = await UserModel.findByPk(id)
    const userId = user.user_id
    if(!userId) {
        throw new Error("Id null");
    }
    const addData = await TodoModel.create({
        user_id : userId,
        todo : todo,
        description : description
    })
    return addData
}

const updateTodo = async (id, params) => {
    const { todo, description } = params
    const update = await TodoModel.update({
        todo : todo,
        description : description
    }, {
        where : {
            id : id
        }
    }) 
    return update
}

const deleteTodo = async (id) => {
    const deleteData = await TodoModel.destroy({
        where : {
            id : id
        }
    })
    return deleteData
}

module.exports = {
    getAllTodosById,
    getDetailTodo,
    addTodo,
    updateTodo,
    deleteTodo
}