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
        password: req.body.password
    });
    console.log(user);
    user.save()
        .then(saveUser => res.json(saveUser))
        .catch(e => next(e));

}

// function get(req, res,netx){
//     User.find({},)
// }




module.exports.create = create;
