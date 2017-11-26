const mongoose = require('mongoose');
const Users = require('./users.model')
const Event = require('./events.model')


//Specific objects
const schema = mongoose.Schema;
const typeObjectId = mongoose.Schema.Types.ObjectId



const RegisterSchema = new schema({
  
  user : { type: typeObjectId, ref: 'Users', required:true},
  usersRegistred: { type: Number, default:0 },
  event : { type: typeObjectId, ref: 'Event', required: true},  
  create_up : { type: Date, default: Date.now}
})



Registered = mongoose.model('RegisteredEventUsers', RegisterSchema);

module.exports = Registered;