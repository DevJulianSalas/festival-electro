const express = require('express');
const userCtrl = require('../controllers/users.controller');


const router =  express.Router();

router.route('/users')
 /** /api/users create new user */
    .post(userCtrl.create)

    .get(userCtrl.get)


router.route('/user')
/* Delete and updateuser passing user id*/
    .delete(userCtrl.deleteUser)
    .put(userCtrl.updateUser)


router.route('/user/:userid')
//** get users acording to id*/
    .get(userCtrl.getById)
    


    
module.exports = router;

