const db = require('../models');
const User = db.User;

const create = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email, password });
    res.status(201).send(user);
  }
  catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the User.'
    });
  }
}

module.exports = {
  create
}