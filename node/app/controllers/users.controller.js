const User = require('../models/users.model');
const validator = require('../validators/user.validator');
const joi = require('joi');

/** 
 * 
 * Create new user
 * @property {string} req.body.username
 * @property {string} req.body.name
 * @property {string} req.body.password
*/


//POST method 
function create(req, res, next){
    const {error, value} = validator.validateUser(req.body)
    if (error) res.json(
        {
            "error": true,
            "message":error.details[0]
        }
    )
    const user = new User({value});
    user.save()
        .then(saveUser => res.json(
            {"success":true,"create_up":saveUser.create_up})
        )
        .catch(error => res.json({"error":error.errmsg})
        );
}

//GET method 
function get(req, res, next){
    const projection = ["user_name", "name"]
    User.find({}, projection, function(err, users){
        if (err) return err;
        res.json(users)
    })
}

//GET by argument Method
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





module.exports.create = create;
module.exports.getById = getById;
module.exports.get = get;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;