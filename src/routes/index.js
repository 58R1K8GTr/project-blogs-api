const express = require('express');

const router = express.Router();

const loginRouter = require('./login.route');

router.use('/login', loginRouter);

module.exports = router;