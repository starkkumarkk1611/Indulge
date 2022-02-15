const Joi = require('joi');
const emailValidation = (data) => {
    const userSchemeValidation = Joi.object({
        email: Joi.string().min(6).max(50).email(),
    });
    return userSchemeValidation.validate(data);
}

module.exports.emailValidation = emailValidation;
