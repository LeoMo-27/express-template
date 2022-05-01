function validateBody (req, res, next) {
  const keys = ['firstName', 'lastName', 'email', 'password'];
  const body = req.body;
  if (keys.every(key => Object.keys(body).includes(key))) {
    next();
  }
  else {
    res.status(400).send({
      message: 'Missing required fields'
    });
  }
}

module.exports = validateBody;