const { LoginService } = require('../services');

async function login(req, res) {
  const { body } = req;
  const { status, data } = await LoginService.getByEmail(body);
  res.status(status).json(data);
}

module.exports = { login };