const { UserRepo, UsersRepo } = require("../repositories");
const bcrypt = require("bcrypt");

const getProfile = async (id) => {
  if (!id) {
    return Promise.reject(new Error("Invalid id"));
  }
  const response = await UserRepo.getProfile(id);
  if (!response) {
    return Promise.reject(new Error("Not Found"));
  }
  return response;
};

const addUser = async (data) => {
  const { email, password } = data;
  const { username, gender, phone_number, place } = data;
  let photo

  const checkEmail = await UsersRepo.getUsersByEmail(email);
  if (checkEmail) {
    throw new Error("Email already exist");
  }

  if (!email && !password && !username && !gender && !phone_number && !place) {
    throw new Error("Some value null");
  }

  if(gender === 'M') {
    photo = 'man.png'
  } else {
    photo = 'woman.png'
  }

  const hashPass = bcrypt.hashSync(password, 10);
  const response = await UserRepo.addUsers({
    photo_profile : photo,
    email,
    password: hashPass,
    username,
    gender,
    phone_number,
    place,
  });
  return response;
};

const updateUser = async (id, data) => {
    const { email, password } = data;
    const { username, gender, phone_number, place } = data;

    const checkUser = await UsersRepo.getUsersById(id)
    if(!checkUser) {
        throw new Error('Not Found');
    }

    let checkEmail
    if(email) {
        checkEmail = await UsersRepo.getUsersByEmail(email)
    }

    if(checkEmail && checkUser.email != checkEmail.email) {
        throw new Error('Email already exist');
    }

    let hashPass
    if(password) {
        hashPass = bcrypt.hashSync(password, 10)
    }

    const response = await UserRepo.updateProfile(id, {
        email,
        password : hashPass,
        username,
        gender,
        phone_number,
        place,
    })

    return response
}

module.exports = {
    getProfile,
    addUser,
    updateUser
}
