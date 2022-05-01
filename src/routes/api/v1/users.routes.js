const express = require('express');

const users = require('../../../controllers/users.controller');

const validateBody = require('../../../middlewares/users/validateBody');
const findById = require('../../../middlewares/users/findById');

const router = express.Router();

router.get('/', users.findAll);
router.get('/:id', findById, users.findOne);

router.post('/', validateBody, users.create);

router.patch('/:id', findById, users.update);


module.exports = router;