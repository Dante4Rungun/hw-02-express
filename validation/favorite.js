const Joi = require("@hapi/joi");

exports.favorite = Joi.object()
    .keys({
        favorite: Joi.boolean()
            .required()
            .messages({
            'boolean.base': 'favorite should be a type of boolean'
        })
    })