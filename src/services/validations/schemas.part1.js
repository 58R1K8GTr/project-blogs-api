const joi = require('joi');

const fieldsAreMissing = 'Some required fields are missing';

const loginSchema = joi.object({
  email: joi.string().max(255).required()
    .messages({
      'any.required': fieldsAreMissing,
      'string.empty': fieldsAreMissing,
    }),
  password: joi.string().max(255).required()
    .messages({
      'any.required': fieldsAreMissing,
      'string.empty': fieldsAreMissing,
    }),
});

const userSchema = joi.object({
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

const categorySchema = joi.object({
  name: joi.string().required()
    .messages({
      'any.required': '"name" is required',
    }),
});

const postPostSchema = joi.object({
  title: joi.string().required()
    .messages({ 'any.required': fieldsAreMissing, 'string.empty': fieldsAreMissing }),
  content: joi.string().required()
    .messages({ 'any.required': fieldsAreMissing, 'string.empty': fieldsAreMissing }),
  categoryIds: joi.array().items(joi.number().required()).min(1).required()
    .messages({
      'array.includesRequiredUnknowns': fieldsAreMissing,
      'any.required': fieldsAreMissing,
      'array.min': fieldsAreMissing,
    }),
});

module.exports = { loginSchema, userSchema, categorySchema, postPostSchema };