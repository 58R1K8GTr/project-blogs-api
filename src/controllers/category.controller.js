const { CategoryService } = require('../services');

async function insert(req, res) {
  const { body } = req;
  const { status, data } = await CategoryService.insert(body);
  return res.status(status).json(data);
}

async function findAll(_req, res) {
  const { status, data } = await CategoryService.findAll();
  return res.status(status).json(data);
}

module.exports = { insert, findAll };