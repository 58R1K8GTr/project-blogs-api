const { CategoryService } = require('../services');

async function insert(req, res) {
  const { status, data } = await CategoryService.insert(req.body);
  return res.status(status).json(data);
}

module.exports = { insert };