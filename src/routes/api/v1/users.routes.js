const express = require('express');

const users = require('../../../controllers/users.controller');

const validateBody = require('../../../middlewares/users/validateBody');

const router = express.Router();

router.post('/', validateBody, users.create);

module.exports = router;