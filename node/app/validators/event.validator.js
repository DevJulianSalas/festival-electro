const joi = require('joi')
const mongoObject = require('mongoose').Types.ObjectId;



//*Schemas validators */
const schemaEvent = joi.object().keys({
    name: joi.string().min(1).max(100).required(),
    type: joi.string().required().lowercase().valid('private', 'public'),
    location: joi.string().min(1).max(100).required(),
    startdate: joi.date().iso().required(),
    duration: joi.string().required(),
    enddate: joi.date().iso().required(),
    description: joi.string().required(),
    value: joi.number().min(0).required(),
    currency: joi.string().required(),
    limit: joi.number().required()
})



const schemaEventUpdate = joi.object().keys({
    _id: joi.string().required(),
    name: joi.string().min(1).max(100),
    type: joi.string().lowercase().valid('private', 'public'),
    location: joi.string().min(1).max(100),
    startdate: joi.date().iso(),
    duration: joi.string(),
    enddate: joi.date().iso(),
    description: joi.string(),
    value: joi.number().min(0),
    currency: joi.string(),
    limit: joi.number()
})


const SchemaEventId = joi.object().keys({
    "_id": joi.string().required()
})

/*Helper validators*/

const validateEvent = (schemaRequest) => {
    //validate if json request is to schemaEvent
    return joi.validate(schemaRequest, schemaEvent,{
        abortEarly: false,
    })
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

const validateUpdateEvent = (schemaRequestUpdate) => {
    //schemaRequest is a json data request to validate updateUser
    let { error, value } = joi.validate(schemaRequestUpdate, schemaEventUpdate)
    if (error) return {
        "error": true,
        "message": error.details[0].message
    }
    const validaObectId = validateObjectId(value._id)
    if (validaObectId.error) return validaObectId
    const updateEventObject = Object.assign(value, { "_id": validaObectId })
    return updateEventObject
}

const validateDeleteUser = (ObjectIdRequest) => {
    /**
     * Make two valitadions, the first one check out if exist json data
     * with key _id, the second one check out if _id give is an objectid 
     * valid.
     */
    const { error, value } = joi.validate(ObjectIdRequest, SchemaEventId, {
        abortEarly: false,
    }
    )
    if (error) return {
        "error": true,
        "message": error.details[0].message
    }
    const validObject = validateObjectId(value._id)
    if (validObject.error) return validObject
    else return validObject
}


module.exports.validateEvent = validateEvent;
module.exports.validateObjectId = validateObjectId;
module.exports.validateUpdateEvent = validateUpdateEvent;
module.exports.validateDeleteUser = validateDeleteUser;