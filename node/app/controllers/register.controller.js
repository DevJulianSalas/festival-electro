const Register = require('../models/register.models')
const validator = require('../validators/register.validator')



// controllers

function create(req, res) {
    let validate = validator.schemaRegister(req.body)
    if (validate.error) return res.json(validate)
    const query = {
      "event": validate.event,
      "user": validate.user  
    }
    Object.assign(validate, {create_up: new Date()})
    Register.update(query, {$set: validate}, {upsert:true}, function(err,success) {
        if (err) return res.json(err)
        else return res.json({
            message: success,
            success: true
        })
    })
}




module.exports.create = create;