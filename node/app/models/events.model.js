const mongoose = require('mongoose');
const schema = mongoose.Schema;



const EventsSchema = new schema({
    name : {type: String, maxlength: 100, unique:true, required: true },
    type : {type: String, enum: ["private", "public"], required: true},
    location: {type: String, maxlength:150, required: true},
    startdate: {type: Date, required: true},
    duration: {type: String, required: true},
    enddate: {type: Date, required: true},
    description: {type: String, required: true},
    value: {type: Number, required: true},
    currency: {type: String, required: true},
    limit: {type: Number, required: true}
    }   
)

Event = mongoose.model('Event', EventsSchema);

module.exports = Event;


