const mongoose = require('mongoose');
const schema = mongoose.Schema;


const UserSchema = new schema({
    firstName: {type: String,required: true},
    lastName:  {type: String, required: true},
    userName:  {type: String, required: true, unique: true},
    password:  {type: String, required: true},
    //edad: {type: Number, required: false},
    email: {type: String, required: true, unique: true},
    birthday: {type: Date, default: new Date()},
    create_up: {type: Date, default: Date.now},
    update_up: {type: Date},
    active: {type: Boolean, default: false}
    }
)



User = mongoose.model('User', UserSchema);

module.exports = User;