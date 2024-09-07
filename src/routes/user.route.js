const express = require('express');
const userController = require('../controllers/user.controller');

const routerUser = express.Router();

routerUser.post('/', userController.insert);

module.exports = routerUser;