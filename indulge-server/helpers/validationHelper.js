const Joi = require('joi');
const confirmEmailValidation = (data) => {
    const userSchemeValidation = Joi.object({
        email: Joi.string().min(6).max(50).email().required(),
        type: Joi.string().valid('student', 'recruiter').required()
    });
    return userSchemeValidation.validate(data);
}
const registrationValidation = (data) => {
    const userSchemeValidation = Joi.object({
        email: Joi.string().min(6).max(50).email().required(),
        type: Joi.string().valid('student', 'recruiter').required(),
        name: Joi.string().required(),
        company: Joi.string().optional(),
        password: Joi.string().min(8).max(20).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required(),
        repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
            'any.required': `"password must match"`
        }),
    });
    return userSchemeValidation.validate(data);
}
const loginValidation = (data) => {
    const userSchemeValidation = Joi.object({
        email: Joi.string().min(6).max(50).email().required(),
        type: Joi.string().valid('student', 'recruiter', 'admin').required(),
        password: Joi.string().min(8).max(20).regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required(),
    });
    return userSchemeValidation.validate(data);
}



module.exports.confirmEmailValidation = confirmEmailValidation;
module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;



