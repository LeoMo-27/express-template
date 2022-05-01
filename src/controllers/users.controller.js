const db = require('../models');

const { User } = db;

const findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send('Error retrieving users');
  }
};

const findOne = async (req, res) => {
  const { user } = res.locals;
  try {
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  try {
    const user = await User.create({
      firstName, lastName, email, password,
    });
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the User.',
    });
  }
};

const update = async (req, res) => {
  const { user } = res.locals;
  try {
    await user.update(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({
      message: 'Some error occurred while updating the User.',
    });
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
};
