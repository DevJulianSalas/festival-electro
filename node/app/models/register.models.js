const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RegisterSchema = new schema({
    user : {type: ObjectId, ref: 'User', required:true},
    fill : {type: Number, required: true},
    registered: {type: Number, required: true},
    event : {type: ObjectId, ref: 'Event'}

})



Registered = mongoose.model('Registered', RegisterSchema);

module.exports = Registered;