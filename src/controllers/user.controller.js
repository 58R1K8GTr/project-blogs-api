const { UserService } = require('../services');

async function insert(req, res) {
  const { status, data } = await UserService.insert(req.body);
  res.status(status).json(data);
}

module.exports = { insert };