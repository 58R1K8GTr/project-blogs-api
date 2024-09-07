const { LoginService } = require('../services');

async function login(req, res) {
  const { status, data } = await LoginService.getByEmail(req.body);
  res.status(status).json(data);
}

module.exports = { login };