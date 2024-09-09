const models = require('../../models');

async function findByIdUser(id) {
  const user = await models.User.findOne({
    where: { id },
    attributes: ['id'],
  });
  return user;
}

// função não está sendo usada para nada. remover?
async function findAllCategories() {
  const categories = await models.Category.findAll();
  return categories;
}

module.exports = { findByIdUser, findAllCategories };