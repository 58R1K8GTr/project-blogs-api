const express = require('express');

const router = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');
const categoryRouter = require('./category.route');
const postRouter = require('./post.route');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);
router.use('/post', postRouter);

module.exports = router;