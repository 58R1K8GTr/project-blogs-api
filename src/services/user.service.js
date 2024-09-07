const models = require('../models');
const generateToken = require('../auth/generateToken');
const { userPostSchema } = require('./validations/schemas');

const statusCode = {
  'any.required': 400,
  'string.min': 400,
  'string.email': 400,
};

async function insert(userInsertData) {
  const { email } = userInsertData;
  const { error } = userPostSchema.validate(userInsertData);
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
  await models.User.create(userInsertData);
  const token = generateToken(email);
  return { status: 201, data: { token } };
}

module.exports = { insert };