const User = require('../models/user.model');
const schema = require('../validators/user.validator');
const joi = require('joi');
const validateUser = require('../helpers/helper').validateUser
const validateObjectId = require('../helpers/helper').validateObjectId
const mongooseObjectId = require('mongoose').Types.ObjectId;


/** 
 * 
 * Create new user
 * @property {string} req.body.username
 * @property {string} req.body.name
 * @property {string} req.body.password
*/

//POST method 
function create(req, res, next){
    const {error, value} = validateUser(req.body)
    if (error) res.json(error)
    const user = new User({
        user_name: req.body.user_name,
        name: req.body.name,
        last_name: req.body.last_name,
        password: req.body.password,
        edad: req.body.edad,
        email: req.body.email,
    });
    user.save(error)
        .then(saveUser => res.json(
            {"success":true,"create_up":saveUser.create_up}))
        .catch(error => res.json({"error":error.errmsg}));
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
function getById(req, res, next){
    const {error, value} = validateObjectId(req.body)
    if(error) res.json(error)
    const query = {"_id": mongooseObjectId(params.userid)}
    User.findOne(query, function(err, user){
        if (err) res.send(`User with ${userId} not found`);
        res.send(user);
    })
}

function deleteUser(req, res, next){
    User.deleteOne(req.body, function(err, user){
        if (err) res.send(`There were something bad, try again`)
        res.send(`user with object id : ${req.body._id} was delete succesfull`)
    })
}

function updateUser(req, res, next){
    const queryUpdate = req.body
    const queryMatch = {'_id': req.body._id}
    User.where(queryMatch).update({$set: queryUpdate}, function(err, updateUser){
        if (err) res.send('There was a problem')
        res.send('User information update successful')
    })
}




module.exports.create = create;
module.exports.getById = getById;
module.exports.get = get;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;