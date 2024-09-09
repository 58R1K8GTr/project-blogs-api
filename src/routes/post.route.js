const express = require('express');
const postController = require('../controllers/post.controller');
const validateJWT = require('../auth/validateJWT');

const routerPost = express.Router();

routerPost.post('/', validateJWT, postController.insert);
routerPost.get('/', validateJWT, postController.findAll);
routerPost.get('/:id', validateJWT, postController.find);

module.exports = routerPost;