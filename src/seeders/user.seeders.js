const { UserModel } = require("../models");

const User = [];

const createUser = (
  user_id,
  username,
  photo_profile,
  phone_number,
  gender,
  place
) => {
  const user = {
    user_id,
    username,
    photo_profile,
    phone_number,
    gender,
    place,
  };
  User.push(user);
};

createUser(2, "daffa satria", "man.png", "081296444300", "M", "Yogyakarta")
createUser(3, "dian fahreza", "woman.png", "081243555433", "F", "Demak")

const seedUser = async () => {
    try {
        const seed = await UserModel.bulkCreate(User)
        if(seed) {
            const response = {message : "User seed data inserted successfully."}
            return response
        }
    } catch(error) {
        throw new Error('Error seeding user data:', error)
    }
}

module.exports = seedUser
