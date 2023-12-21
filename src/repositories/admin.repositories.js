const { AdminModel, UserModel, UsersModel, TodoModel } = require("../models");

const getAllUser = async () => {
  const dataUser = await UsersModel.findAll({
    where: { role: "user" },
    attributes: ["id", "email", "role"],
    order: [["id", "ASC"]],
  });
  const dataProfile = await UserModel.findAll({
    order: [["user_id", "ASC"]],
  });
  return { dataUser, dataProfile };
};

const deleteUser = async (id) => {
  await TodoModel.destroy({
    where: {
      user_id: id,
    },
  });
  await UserModel.destroy({
    where: {
      user_id: id,
    },
  });
  await UsersModel.destroy({
    where: {
      id: id,
    },
  });
};

const getAllTodos = async () => {
  const getTodos = await TodoModel.findAll({
    order: [["user_id", "ASC"]],
  });
  return getTodos;
};

const deleteTodo = async (id) => {
  const deleteData = await TodoModel.destroy({
    where: {
      id: id,
    },
  });
  return deleteData;
};

const addAdmin = async (params) => {
  const { email, password } = params;
  const { username, phone_number } = params;
  const createAdmin = await UsersModel.create({
    email: email,
    password: password,
    role: "admin",
  });
  const id = createAdmin.id;
  const createDataAdmin = await AdminModel.create({
    admin_id: id,
    username: username,
    phone_number: phone_number,
  });

  return { createAdmin, createDataAdmin };
};

module.exports = {
  getAllUser,
  deleteUser,
  getAllTodos,
  deleteTodo,
  addAdmin,
};
