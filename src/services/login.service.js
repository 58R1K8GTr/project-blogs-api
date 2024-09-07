const models = require('../models');
const { loginPostSchema } = require('./validations/schemas');
const generateToken = require('../auth/generateToken');

const statusCode = { 'any.required': 400, 'string.empty': 400 };

async function getByEmail(loginFields) {
  const { email } = loginFields;
  const { error } = loginPostSchema.validate(loginFields);
  if (error) {
    return { status: statusCode[error.details[0].type], data: { message: error.message } };
  }
  const user = await models.User.findOne({
    where: { email },
  });
  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }
  const token = generateToken(user.id);
  return { status: 200, data: { token } };
}

module.exports = { getByEmail };