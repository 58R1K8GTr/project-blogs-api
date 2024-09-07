const express = require('express');
const loginController = require('../controllers/login.controller');

const routerLogin = express.Router();

routerLogin.post('/', loginController.login);

module.exports = routerLogin;