const joi = require('joi')
const schemaUser = require('../validators/user.validator').schemaUser
const schemaObjectId = require('../validators/user.validator').schemaIdObject
const mongoose = require('mongoose');


const validateUser = (req) => {
    return joi.validate(req.body, schemaUser, {
        abortEarly: false,
    })
} 

const validateObjectId = (req) => {
    return joi.validate(req.body, schemaObjectId, {
        abortEarly: false,
    }) 
}



module.exports.validateUser = validateUser;
module.exports.validateObjectId = validateObjectId