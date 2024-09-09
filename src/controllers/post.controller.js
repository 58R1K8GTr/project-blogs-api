const { PostService } = require('../services');

async function insert(req, res) {
  const { userId, body } = req;
  const { status, data } = await PostService.insert(userId, body);
  return res.status(status).json(data);
}

async function findAll(_req, res) {
  const { status, data } = await PostService.findAll();
  return res.status(status).json(data);
}

async function find(req, res) {
  const { id } = req.params;
  const { status, data } = await PostService.find(id);
  return res.status(status).json(data);
}

module.exports = { insert, findAll, find };