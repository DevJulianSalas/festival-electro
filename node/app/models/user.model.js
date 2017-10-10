const mongoose = require('mongoose');
const schema = mongoose.Schema;


const UserSchema = new schema({
    name : {type: String, required: true},
    last_name : {type: String, required: true},
    user_name : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    edad: {type: Number, required: true},
    email: {type: String, required: true},
    create_up : {type: Date, default: Date.now},
    update_up : {type: Date}
    }
)

User = mongoose.model('User', UserSchema);

module.exports = User;