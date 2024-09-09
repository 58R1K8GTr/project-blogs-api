const models = require('../../models');
const { getPostSchema } = require('../validations/schemas.part2');

async function validationsUpdate(id, insertData) {
  const post = await models.BlogPost.findOne({ where: { id } });
  if (post.userId !== id) {
    return { status: 401, data: { message: 'Unauthorized user' } };
  }
  const { error } = getPostSchema.validate(insertData);
  if (error) {
    return { status: 400, data: { message: error.message } };
  }
}

async function update(id, insertData) {
  const error = await validationsUpdate(id, insertData);
  if (error) {
    return error;
  }
  await models.BlogPost.update(
    { updated: new Date(Date.now()), ...insertData },
    { where: { id } },
  );
  const newPost = await models.BlogPost.findOne(
    { where: { id },
      include: [
        { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: models.Category, as: 'categories', through: { attributes: [] } },
      ] },
  );
  return { status: 200, data: newPost };
}

module.exports = { update };