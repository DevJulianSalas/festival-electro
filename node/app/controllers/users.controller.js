const User = require('../models/users.model');
const validator = require('../validators/user.validator');
const joi = require('joi');
const service = require('../services/auth.service')

/**
 * Endpoints to user
 * create: Add user   POST method
 * get: get a list of users  GET method
 * getById: get specific user give a Id GET method
 * updateUser: update any field of user PUT method
 * deleteUser: delete a user give a Id  DELETE method
 */

 function create(req, res, next){
   console.log(req.body)
    const {error, value} = validator.validateUser(req.body)
    if (error) return res.status(400).json({
      error: true,
      message:error.details
    })
    const user = new User(value);
    user.save()
      .then(saveUser => res.status(200).json({
        error:false,
        create_up: saveUser.create_up
        // token: service.createToken(user)
      }))
      .catch(error => res.status(500).json({
        error: true,
        message: error.errmsg
      }));
}

function get(req, res, next){
    const projection = ["user_name", "name"]
    User.find({}, projection, function(err, users){
        if (err) return err;
        res.json(users)
    })
}

function getById(req, res, next) {
    const objectVal = validator.validateObjectId(req.params.ObjectIdUser)
    if(objectVal.error) res.json(objectVal)
    const projection = ["user_name", "name","email"]
    const query = {"_id": objectVal}
    User.findOne(query, projection, function(err, result){
        if (err) return err;
        res.json(result)
    })
}

function deleteUser(req, res, next){
  const validateDelete = validator.validateDelete(req.body)
  if(validateDelete.error) res.json(validateDelete) 
  const query = {"_id": validateDelete}
  User.deleteOne(query, function(err, user){
    if (err) res.json(err)
    else res.json({
      "message": "User delete successfull",
      "operation": true
    })
  })
}

function updateUser(req, res, next){
    const validateUpdate = validator.validateUpdateUser(req.body)
    const options = {
        "multi":false,
        "new":false
    }
    if (validateUpdate.error) res.json(validateUpdate)
    const query_id = {"_id": validateUpdate._id}
    User.findByIdAndUpdate(
        query_id, {$set:validateUpdate},
        options, (err, results) => {
            if (results == null) res.json({
                "message": "update not completed, checkout if idObject exist",
                "update":false
            })
            else if(err) res.json(err) 
            else {
                res.json({
                "message": "update user successful",
                "update": true
            })}
        })
}

//Helpers Method

function singIn (req, res) {
  const {error, validate} = validator.validateUserEmail(req.body)
  if (error) return res.status(500).send({
    message: error.details, error:true
  })
  User.find(validate, (err, user)=> {
    if (err) res.status(500).send({message: err, error:true})
    if (!user) res.status(404).send({message: 'Email not exist to user'})
    req.user = user
    res.status(200).send({
      message: 'Your logued were successfull',
      token: service.createToken(user)
    })
  })
}



module.exports = {
    create,
    getById,
    get,
    updateUser,
    deleteUser,
    singIn
}

// module.exports.create = create;
// module.exports.getById = getById;
// module.exports.get = get;
// module.exports.deleteUser = deleteUser;
// module.exports.updateUser = updateUser;