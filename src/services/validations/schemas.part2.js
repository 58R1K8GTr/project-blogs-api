const joi = require('joi');

const fieldsAreMissing = 'Some required fields are missing';

const getPostSchema = joi.object({
  title: joi.string().required()
    .messages({ 'any.required': fieldsAreMissing, 'string.empty': fieldsAreMissing }),
  content: joi.string().required()
    .messages({ 'any.required': fieldsAreMissing, 'string.empty': fieldsAreMissing }),
});

module.exports = { getPostSchema };