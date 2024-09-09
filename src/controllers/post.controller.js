const { PostServicePart1, PostServicePart2 } = require('../services');

async function insert(req, res) {
  const { userId, body } = req;
  const { status, data } = await PostServicePart1.insert(userId, body);
  return res.status(status).json(data);
}

async function findAll(_req, res) {
  const { status, data } = await PostServicePart1.findAll();
  return res.status(status).json(data);
}

async function find(req, res) {
  const { id } = req.params;
  const { status, data } = await PostServicePart1.find(id);
  return res.status(status).json(data);
}

async function update(req, res) {
  const { userId, body } = req;
  const { status, data } = await PostServicePart2.update(userId, body);
  return res.status(status).json(data);
}

module.exports = { insert, findAll, find, update };