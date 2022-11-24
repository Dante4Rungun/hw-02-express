const Joi = require("@hapi/joi");

exports.subscription = Joi.object()
    .keys({
    subscription: Joi.string()
        .valid('starter','pro','business')
        .required()
})