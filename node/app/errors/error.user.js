//Handle all errors to user.

const emailExist = { code: 1000, msg: "Email already exist"}
const userNameExist = { code: 1001, msg: "User name already exist"}
const userNameEmailExist = { code: 1002, msg: "User name and Email already exist"}



module.exports = {
  emailExist,
  userNameEmailExist,
  userNameExist
}
