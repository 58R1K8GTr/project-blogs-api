const express = require('express');
const categoryController = require('../controllers/category.controller');
const validateJWT = require('../auth/validateJWT');

const routerCategory = express.Router();

routerCategory.post('/', validateJWT, categoryController.insert);

module.exports = routerCategory;