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

const userPostSchema = joi.object({
  displayName: joi.string().min(8).required()
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
  email: joi.string().email().required()
    .messages({
      'string.email': '"email" must be a valid email',
    }),
  password: joi.string().min(6).required()
    .messages({
      'string.min': '"password" length must be at least 6 characters long',
    }),
  image: joi.string().max(255).optional(),
});

module.exports = { loginPostSchema, userPostSchema };