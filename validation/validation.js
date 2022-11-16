const Joi = require("@hapi/joi");

exports.contact = Joi.object()
  .keys({
    name: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': `name should be a type of text`,
            'string.empty': `missing required name field`,
            'string.min': `name should have a minimum lenght of 3`,
            'any.required': `name is required field`
        }),
    email: Joi.string()
        .email()
        .min(8)
        .required()
        .messages({
            'string.base': `email should be a type of text`,
            'string.empty': `missing required email field`,
            'string.min': `email should have a minimum lenght of 8`,
            'any.required': `email is required field`
        }),
    phone: Joi.string()
        .min(10)
        .max(12)
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            'string.base': `phone should be a type of text`,
            'string.empty': `missing required phone field`,
            'string.min': `phone should have a minimum lenght of 10`,
            'string.max': `phone should have a minimum lenght of 12`,
            'any.required': `phone is required field`
        })
  });