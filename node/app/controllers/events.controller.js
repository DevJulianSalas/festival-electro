const Event = require('../models/events');



function create(req, res, next){
    const event = new Event({
        name : req.name,
        type : req.type,
        location : req.type,
        startdate : req.startdate,
        duration : req.duration,
        enddate : req.enddate,
        description : req.description,
        value : req.value
    })
    event.save()
        .then(saveEvent => res.json(saveEvent))
        .catch(e => next(e))
}


function get(req, res, next){
    const query = {}
    Event.find(query)
        .then(events => res.send(events))
        .catch(err => res.send(`events not found`))
}

function getById(req, res, next){
    const query = {'_id':req.params.eventId}
    Event.find(query)
        .then(eventId => res.json(eventId))
        .catch(err => res.json(err))
}

function deleteEvent(req, res, next){
    const query = {'_id':req.body.eventId}
    Event.deleteOne(query)
        .then(del => res.json(del))
        .catch(err => res.json(err))
}

function updateEvent(req, res, next){
    const queryMatch = {'_id': req.body.idEvent}
    const query = req.body
    Event.where(queryMatch).update({$set: query})
        .then(updateEvent => res.json(updateEvent))
        .catch(err => res.json(err))
}


module.exports.create = create;
module.exports.get = get;
module.exports.getById = getById;
module.exports.deleteEvent = deleteEvent;
module.exports.updateEvent = updateEvent;


