const express = require('express');
const eventCtrl = require('../controllers/events.controller')


const router = express.Router();

router.route('/')
  //Crud operation to events
  .post(eventCtrl.create)
  .get(eventCtrl.get)
  .put(eventCtrl.updateEvent)
  .delete(eventCtrl.deleteEvent)

router.route('/:ObjectIdEvent')
  // Get Object by OBjectIdEvent
  .get(eventCtrl.getById)

module.exports = router
