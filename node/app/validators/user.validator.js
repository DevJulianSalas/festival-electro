const joi = require('joi')
const mongoObject = require('mongoose').Types.ObjectId;


//* Regex validators *//
const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/


//* Schemas */

const schemaUser = joi.object().keys({
    user_name: joi.string().required(),
    name: joi.string().required(),
    last_name: joi.string().required(),
    password: joi.string().regex(regexPassword).required(),
    edad: joi.number().integer().positive().max(100).min(10).required(),
    email: joi.string().email().required()
})

const SchemaUserId = joi.object().keys({
    "_id": joi.string().required()
})

const schemaUpdateUser = joi.object().keys({
    "_id": joi.string().required(),
    user_name: joi.string(),
    name: joi.string(),
    last_name: joi.string(),
    password: joi.string().regex(regexPassword),
    edad: joi.number().integer().positive().max(100).min(10),
    email: joi.string().email()
})


//* Helpers validators */

const validateUser = (schemaRequest) => {
    //schemaRequest is a json data request to validate schemaUser
    return joi.validate(schemaRequest, schemaUser, {
        abortEarly: false,
    })
}

const validateUpdateUser = (schemaRequestUpdate) => {
    //schemaRequest is a json data request to validate updateUser
    let {error, value} = joi.validate(schemaRequestUpdate, schemaUpdateUser)
    if (error) return {
        "error": true,
        "message": error.details[0].message
    }
    const validaObectId = validateObjectId(value._id)
    if (validaObectId.error) return validaObectId
    const updateUserObject = Object.assign(value, {"_id":validaObectId})
    return updateUserObject
    
    
    
}


const validateObjectId = (ObjectIdRequest) => {
    //If is valid return ObjectId and true
    flagValid = mongoObject.isValid(ObjectIdRequest)
    if(!flagValid) return {
        "error": true,
        "message": "ObjectId not is valid, check out it",
        "object": ObjectIdRequest
        }
    else return mongoObject(ObjectIdRequest)
}


const validateDeleteUser = (ObjectIdRequest) => {
    /**
     * Make two valitadions, the first one check out if exist json data
     * with key _id, the second one check out if _id give is an objectid 
     * valid.
     */
    const {error, value} = joi.validate(ObjectIdRequest, SchemaUserId, {
        abortEarly: false,
        }
    )
    if (error) return {
        "error": true,
        "message": error.details[0].message
    }
    const validaObectId = validateObjectId(value._id)
    if (validaObectId.error) return validaObectId
    else return validaObectId
}




module.exports.validateUser = validateUser;
module.exports.validateObjectId = validateObjectId;
module.exports.validateDelete = validateDeleteUser;
module.exports.validateUpdateUser = validateUpdateUser;
