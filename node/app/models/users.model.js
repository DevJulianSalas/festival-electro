const mongoose = require('mongoose');
const schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const errors = require('../errors/error.user')



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

UserSchema.pre('save', function(next) {
  var email = this.email
  this.constructor.count({ '$and': [ { userName: this.userName } ] }, function (err, user){
    this.User.count({ '$and': [ { email: email } ] }, function(err, email){
      if (user === 1 && email === 1) {
        error = new Error("Email and username already exists")
        error.info = errors.userNameEmailExist
        next(error)
      } else if (user === 1) {
        error = new Error("Username already exists")
        error.info = errors.userNameExist
        next(error)
      } else if (email === 1) {
        error = new Error("Email already exists")
        error.info = errors.emailExist
        console.log(error)
        next(error)
      } else {
        next()
      }
    })
  })
  
})
  // const email = 1
  // const user = this.constructor.where({ '$and': [ { userName: this.userName } ] }, function(err, count){return count})
  // console.log(email)
  // console.log(user)
  // if (email > 1 && user > 1) {
  //   var error = new Error("Email and username already exists")
  //   error.userEmail = errors.userNameEmailExist
  //   next(error)
  // } else if (email > 1) {
  //   var error = new Error("Email already exists")
  //   error.email = errors.emailExist
  //   next(error)
  // } else if (user > 1) {
  //   var error = new Error("Username already exists")
  //   error.user = errors.userNameExist
  //   next(error)
  // } else {
//     next()
//   }
// })


User = mongoose.model('User', UserSchema);
module.exports = User;
