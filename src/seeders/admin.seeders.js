const { AdminModel } = require('../models')

const Admin = []

const createAdmin = (admin_id, username, phone_number) => {
    const admin = {admin_id, username, phone_number}
    Admin.push(admin)
}

createAdmin(1, "rizki khoir", "081276555433")

const seedAdmin = async () => {
    try {
        const seed = await AdminModel.bulkCreate(Admin)
        if(seed) {
            const response = {message : "Admin seed data inserted successfully."}
            return response
        }
    } catch(error) {
        throw new Error('Error seeding admin data:', error)
    }
}

module.exports = seedAdmin