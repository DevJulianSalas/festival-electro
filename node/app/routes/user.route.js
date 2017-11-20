const express = require('express');
const userCtrl = require('../controllers/users.controller');


const router =  express.Router();

router.route('/')
    // CRUD operations to users
  .post(userCtrl.create)
  .get(userCtrl.get)
  .delete(userCtrl.deleteUser)
  .put(userCtrl.updateUser)
  

router.route('/:ObjectIdUser')
  .get(userCtrl.getById)
  
  


    
module.exports = router;

