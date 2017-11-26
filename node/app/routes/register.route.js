const express = require('express');
const registerCtrl = require('../controllers/register.controller')


const router = express.Router();

router.route('/')
  .post(registerCtrl.create)



module.exports = router;