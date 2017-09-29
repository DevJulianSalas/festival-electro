const express = require('express');
const userCtrl = require('../controllers/users.controller');


const router =  express.Router();

router.route('/users')
 /** /api/users create new user*/
    .post(userCtrl.create)

    // .get(userCtrl.get);

    
module.exports = router;
