const models = require('../models');
const { categorySchema } = require('./validations/schemas');

const statusCode = {
  'any.required': 400,
};

async function insert(insertData) {
  const { error } = categorySchema.validate(insertData);
  if (error) {
    return { status: statusCode[error.details[0].type], data: { message: error.message } };
  }
  const user = await models.Category.create(insertData);
  return { status: 201, data: user };
}

async function findAll() {
  const users = await models.Category.findAll();
  return { status: 200, data: users };
}

module.exports = { insert, findAll };