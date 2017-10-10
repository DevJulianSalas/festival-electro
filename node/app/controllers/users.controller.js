const User = require('../models/user.model');

/** 
 * Create new user
 * @property {string} req.body.username
 * @property {string} req.body.name
 * @property {string} req.body.password
*/

function create(req, res, next){
    const user = new User({
        user_name: req.body.user_name,
        name: req.body.name,
        last_name: req.body.last_name,
        password: req.body.password,
        edad: req.body.edad,
        email: req.body.email,
    });
    user.save()
        .then(saveUser => res.json(saveUser))
        .catch(error => res.json(error));

}

function get(req, res, next){
    const projection = ["user_name", "name"]
    User.find({},projection,function(err, users){
        if (err) return err;
        res.json(users)
    })
}

function getById(req, res, next){
    const userId = req.params.userid
    const query = {"_id": userId}
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