/* eslint-disable max-lines-per-function */
const models = require('../models');
const { postSchema } = require('./validations/schemas');

async function insert(userId, insertData) {
  const categories = (await models.Category.findAll()).map(({ id }) => id);
  const { error } = postSchema.validate(insertData);
  if (error) {
    return { status: 400, data: error.message };
  }
  const condition = !insertData.categoryIds.every((id) => categories.includes(id));
  if (condition) {
    return { status: 400, data: 'one or more "categoryIds" not found' };
  }
  const post = await models.BlogPost.create(
    { userId, ...insertData },
    { include: { model: models.Category, as: 'category' } },
  );
  const insertBulk = categories.map((categoryId) => ({ categoryId, postId: post.id }));
  await models.PostCategory.bulkCreate(insertBulk);
  return { status: 201, data: post };
}

async function findAll() {
  const { User, Category } = models;
  const allPostsUsers = await models.BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: allPostsUsers };
}

module.exports = { insert, findAll };