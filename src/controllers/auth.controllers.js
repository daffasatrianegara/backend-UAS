const { UserService, AuthService, AdminService } = require("../services");


const login = async (req, res) => {
  const {email, password} = req.body
  try {
    const token = await AuthService.login({email, password})
    res.json({ message : "login seccessfully", token : token})
  } catch(error) {
    res.json({ message: error.message });
  }
}

const registerUser = async (req, res) => {
  const { email, password, username, gender, phone_number, place } = req.body;
  try {
    const result = await UserService.addUser({
      email,
      password,
      username,
      gender,
      phone_number,
      place,
    });
    res.json({ message: "success", data: result });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const registerAdmin = async (req, res) => {
    const { email, password, username, phone_number } = req.body
    try {
        const result = await AdminService.addAdmin({ email, password, username, phone_number })
        res.json({ message: 'success', data : result})
    } catch(error) {
        res.json({ message: error.message });
    }
}

module.exports = {
    login,
    registerUser,
    registerAdmin
}
