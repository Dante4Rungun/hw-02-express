const Joi = require("@hapi/joi");

exports.login = Joi.object()
    .keys({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': `email should be a type of text`,
            'string.empty': `missing required email field`,
            'any.required': `email is required field`
        }),
    password: Joi.string()
        .required()
        .messages({
            'string.base': `password should be a type of text`,
            'string.empty': `missing required password field`,
            'any.required': `password is required field`        
        })
})