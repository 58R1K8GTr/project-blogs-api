const models = require('../models');
const { postSchema } = require('./validations/schemas');

async function insert(userId, insertData) {
  const categories = (await models.Category.findAll()).map(({ id }) => id);
  const { error } = postSchema.validate(insertData);
  if (error) {
    return { status: 400, data: { message: error.message } };
  }
  const condition = !insertData.categoryIds.every((id) => categories.includes(id));
  if (condition) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  const post = await models.BlogPost.create(
    { userId, ...insertData },
    { include: { model: models.Category, as: 'categories' } },
  );
  const { id: postId } = post;
  const insertBulk = categories.map((categoryId) => ({ categoryId, postId }));
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

async function find(id) {
  const { User, Category } = models;
  const user = await models.BlogPost.findOne(
    {
      where: { id },
      attributes: { exclude: ['password'] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );
  if (!user) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }
  return { status: 200, data: user };
}

module.exports = { insert, findAll, find };