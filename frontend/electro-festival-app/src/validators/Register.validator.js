//Validators
import Joi from 'joi';

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

const registerValidator = Joi.object().keys({
    userName: Joi.string().alphanum().min(3).max(10).required(),
    password: Joi.string().regex(regexPassword).required(),
    email: Joi.string().email().required()

})


export default registerValidator;