const { PostService } = require('../services');

async function insert(req, res) {
  const { status, data } = await PostService.insert(req);
  return res.status(status).json(data);
}

module.exports = { insert };