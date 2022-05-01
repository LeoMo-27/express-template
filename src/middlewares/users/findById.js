const db = require('../../models');
const User = db.User;

async function findById (req, res, next) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.locals = { user };
      return next();
    }
    res.status(404).send({
      message: 'User not found'
    });
  }
  catch (err) {
    res.status(500).send({
      message: 'Some error occurred while retrieving users.'
    });
  }
};
  
module.exports = findById;
