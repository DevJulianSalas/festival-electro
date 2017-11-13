const joi = require('joi')

const schema = {
    user_name: joi.string(),
    name: joi.string(),
    last_name: joi.string(),
    password: joi.string().regex(/^[a-zA-Z0-9]{4-30}$/),
    edad: joi.number().integer().positive().max(100).min(10),
    email: joi.string().email()
}


module.exports.schema = schemaUser;