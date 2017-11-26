const Register = require('../models/register.models')
const validator = require('../validators/register.validator')


//Projections 
const projectEvent = {
    'event': true,
    'user': true
}


// controllers
function create(req, res) {
    let validate = validator.schemaRegister(req.body)
    if (validate.error) return res.json(validate)
    const query = {
      "event": validate.event,
      "user": validate.user  
    }
    Register.count(query, (err, count) => {
        if (count > 0) return res.json({
          message: 'User already registered to event',
          registered: false
        })
        else {
          Object.assign(validate, {create_up: new Date()})
          Register.update(query, {$set: validate}, {upsert:true}, function(err,success) {
            if (err) return res.json(err)
            else return res.json({
              message: success.upserted,
              success: true
            })
          })

        }
    })
}

function get(req, res){
  Register.find({}, projectEvent)
    .then(register => res.json(register))
    .catch(err => res.json(err))
}

//stand by
// function update(req, res){

// }


function deleteRegister(req, res){
  const validate = validator.schemaRegister(req.body)
  if (validate.error) return res.json(validate)
  const query = {
    "event": validate.event,
    "user": validate.user
  }
  Register.findOneAndRemove(
    query, { passRawResult:true }, function(error, doc, result){
        
        if(error) return res.json({
          message:error,
          delete: false
        })
        else return res.json({
          operation: true,
          documentDeleted: result.value
        })
    }
  )
}







module.exports.create = create;
module.exports.get = get;
module.exports.deleteRegister = deleteRegister;