const db = require('../../models');

const { User } = db;

async function findById(req, res, next) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.locals = { user };
      return next();
    }
    return res.status(404).send({
      message: 'User not found',
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Some error occurred while retrieving users.',
      error: error.message,
    });
  }
}

module.exports = findById;
