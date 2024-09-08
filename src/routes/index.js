const express = require('express');

const router = express.Router();

const loginRouter = require('./login.route');
const userRouter = require('./user.route');
const categoryRouter = require('./category.route');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoryRouter);

module.exports = router;