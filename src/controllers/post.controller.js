const { PostService } = require('../services');

async function insert(req, res) {
  const { user: id, body } = req;
  const { status, data } = await PostService.insert(id, body);
  return res.status(status).json(data);
}

async function findAll(req, res) {
  const { status, data } = await PostService.findAll();
  return res.status(status).json(data);
}

module.exports = { insert, findAll };