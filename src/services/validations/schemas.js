const joi = require('joi');

const loginPostSchema = joi.object({
  email: joi.string().max(255).required()
    .messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
  password: joi.string().max(255).required()
    .messages({
      'any.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
});

module.exports = { loginPostSchema };