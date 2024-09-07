const express = require('express');
const userController = require('../controllers/user.controller');
const validateJWT = require('../auth/validateJWT');

const routerUser = express.Router();

routerUser.post('/', userController.insert);
routerUser.get('/', validateJWT, userController.findAll);
routerUser.get('/:id', validateJWT, userController.find);

module.exports = routerUser;