const { TodoModel } = require('../models')

const Todos = []

const createTodo = (user_id, todo, description) => {
    const Todo = {user_id, todo, description}
    Todos.push(Todo)
}

createTodo(2, "membaca buku", "membaca novel tere liye")
createTodo(2, "belajar koding", "mempelajari framework JS")
createTodo(3, "belajar excel", "untuk mengerjakan tugas akutansi")
createTodo(3, "belajar MSword", "untuk menyelesaikan TA")

const seedTodo = async () => {
    try {
        const seed = await TodoModel.bulkCreate(Todos)
        if(seed) {
            const response = {message : "Todo seed data inserted successfully."}
            return response
        }
    } catch(error) {
        throw new Error('Error seeding todo data:', error)
    }
}

module.exports = seedTodo