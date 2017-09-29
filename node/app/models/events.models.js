const mongoose = require('mongoose');
const schema = mongoose.Schema;



const EventsSchema = new schema({
    name : {type: String, maxlength: 100},
    type : {type: String, enum: ["private", "public"]},
    location: {type: String, maxlength:150},
    startdate: {type: Date},
    duration: {type: Number},
    enddate: {type: Date},
    description: {type: String},
    value: {type: Number}
    }   
)


Event = mongoose.model('Event', EventsSchema);

module.exports = Event;


