const { UserService } = require('../services');

async function insert(req, res) {
  const { body } = req;
  const { status, data } = await UserService.insert(body);
  res.status(status).json(data);
}

async function findAll(_req, res) {
  const { status, data } = await UserService.findAll();
  res.status(status).json(data);
}

async function find(req, res) {
  const id = Number(req.params.id);
  const { status, data } = await UserService.findById(id);
  res.status(status).json(data);
}

module.exports = { insert, findAll, find };