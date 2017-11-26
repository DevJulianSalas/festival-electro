const joi = require('joi')
const mongoObject = require('mongoose').Types.ObjectId;

//Schema validators

const schemaRegister = joi.object().keys({
    user: joi.string().regex(/^[a-f\d]{24}$/i).required(),
    usersRegistred: joi.number(),
    event: joi.string().regex(/^[a-f\d]{24}$/i).required(),
    create_up: joi.date().iso()
})


// Helpers validator

const validateRegister = (schemaRequest) => {
    //verify if request schemaRequest is valid
    let {error, value} = joi.validate(schemaRequest, schemaRegister, {
        abortEarly: false,
    })
    if(!error){
      const copyValue = Object.assign(value,{
        "user": mongoObject(value.user),
        "event": mongoObject(value.event)
      })
      return copyValue
    }else{
      return { 
        "error": true,
        "message": error.message
      }
    }
}

module.exports.schemaRegister = validateRegister;