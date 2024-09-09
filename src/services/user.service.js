const models = require('../models');
const generateToken = require('../auth/generateToken');
const { userSchema } = require('./validations/schemas.part1');

const statusCode = {
  'any.required': 400,
  'string.min': 400,
  'string.email': 400,
};

async function insert(userInsertData) {
  const { email } = userInsertData;
  const { error } = userSchema.validate(userInsertData);
  if (error) {
    return { status: statusCode[error.details[0].type], data: { message: error.message } };
  }
  const user = await models.User.findOne({
    where: { email },
    attributes: ['email'],
  });
  if (user) {
    return { status: 409, data: { message: 'User already registered' } };
  }
  const { id } = await models.User.create(userInsertData);
  const token = generateToken(id);
  return { status: 201, data: { token } };
}

async function findAll() {
  const users = await models.User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 200, data: users };
}

async function findById(id) {
  const user = await models.User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: user };
}

module.exports = { insert, findAll, findById };