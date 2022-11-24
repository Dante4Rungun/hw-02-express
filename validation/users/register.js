const Joi = require("@hapi/joi");

exports.register = Joi.object()
    .keys({
    email: Joi.string()
        .email()
        .min(6)
        .max(50)
        .required()
        .messages({
            'string.base': `email should be a type of text`,
            'string.empty': `missing required email field`,
            'string.min': `email should have a minimum lenght of 8`,
            'any.required': `email is required field`
        }),
    password: Joi.string()
        .min(8)
        .required()
        .messages({
            'string.base': `password should be a type of text`,
            'string.empty': `missing required password field`,
            'string.min': `password should have a minimum lenght of 8`,
            'any.required': `password is required field`        
        }),
    subscription: Joi.string()
        .valid('starter','pro','business')
        .optional()
})