const express = require('express');
const userCtrl = require('../controllers/users.controller');
const auth = require('../middlewares/auth.middlewares')

const router =  express.Router();

router.post('/users', userCtrl.create)
router.post('/users/auth', userCtrl.singIn)
router.get('/users', auth, userCtrl.get)
router.put('/users', auth, userCtrl.updateUser)
router.get('/users/:ObjectIdUser', auth, userCtrl.getById)

  
module.exports = router;

