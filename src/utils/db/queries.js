const models = require('../../models');

async function findById(id) {
  const user = await models.User.findOne({
    where: { id },
    attributes: ['id'],
  });
  return user;
}

module.exports = { findById };