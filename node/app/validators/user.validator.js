const joi = require('joi')

const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
const regexObjectId= /^[a-f\d]{24}$/i


const schema = joi.object().keys({
    user_name: joi.string().required(),
    name: joi.string().required(),
    last_name: joi.string().required(),
    password: joi.string().regex(regexPassword).required(),
    edad: joi.number().integer().positive().max(100).min(10).required(),
    email: joi.string().email().required()
})

const schemaIdObject = joi.object().keys({
    "_id": joi.string().required().regex(regexObjectId)
})

module.exports.schemaUser = schema;
module.exports.schemaIdObject = schemaIdObject;