const Event = require('../models/events.model');
const validator = require('../validators/event.validator');


//*Common projections*/
const project = {
    _id: false,
    __v: false
  }


function create(req, res, next){
    const {error, value} = validator.validateEvent(req.body)
    if(error) res.json({
        error:true,
        message: error.details.filter(data => {
            return data.message
        })
    })
    const event = new Event(value)
    event.save()
        .then(saveEvent => res.json(saveEvent))
        .catch(e => res.json(
            {
              error:true,
              message: e.errmsg
            }
        ))
}

function get(req, res, next){
  Event.find({}, project)
    .then(events => res.send(events))
    .catch(err => res.send(`events not found`))
}

function getById(req, res, next){
  const eventValidate = validator.validateObjectId(req.params.ObjectIdEvent)
  if (eventValidate.error) return res.json(eventValidate)
  const query = {'_id':eventValidate}
    Event.find(query, project)
    .then(eventId => res.json(eventId))
    .catch(err => res.json(err))
}

function deleteEvent(req, res, next){
    const eventValidate = validator.validateDeleteUser(req.body)
    if(eventValidate.error) return res.json(eventValidate) 
    const query = {"_id": eventValidate}
    Event.deleteOne(query, function(err, user){
      if (err) return res.json(err)
      else return res.json({
        "message": "User delete successfull",
        "operation": true
        })
    })
}

function updateEvent(req, res, next){
    const validateEvent = validator.validateUpdateEvent(req.body)
    if (validateEvent.error) return res.json(validateEvent)
    const options = {
        "multi":false,
        "new":false
    }
    const query_id = {"_id": validateEvent._id}
    Event.findByIdAndUpdate(
        query_id, {$set:validateEvent},
        options, (err, results) => {
            if (results == null) res.json({
                "message": "update not completed, checkout if idObject exist",
                "update":false
            })
            else if(err) res.json(err) 
            else {
                res.json({
                "message": "update user successful",
                "update": true
            })}
        }
    )
}

module.exports.create = create;
module.exports.get = get;
module.exports.getById = getById;
module.exports.deleteEvent = deleteEvent;
module.exports.updateEvent = updateEvent;


