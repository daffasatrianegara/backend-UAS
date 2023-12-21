const { UserService } = require("../services");

const getProfile = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await UserService.getProfile(id);
    res.json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  const id = req.params.id;
  const { email, password, username, gender, phone_number, place } = req.body;
  try {
    await UserService.updateUser(id, {
      email,
      password,
      username,
      gender,
      phone_number,
      place,
    });

    res.json({message : 'data updated successfully'})
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
    getProfile,
    updateProfile
}
