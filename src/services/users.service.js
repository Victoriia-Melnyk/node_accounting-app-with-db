const { User } = require('../models/User.model');

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const createUser = async (name) => {
  const currentUsers = await User.findAll();
  // const id = getId(currentUsers);

  return await User.create({ name });
};

const updateUser = async ({ id, name }) => {
  await User.update({ name }, { where: { id } });

  return await getUserById(id);
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
