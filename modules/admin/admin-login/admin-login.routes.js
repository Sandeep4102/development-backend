const express = require('express');
const router = express.Router();
const adminLoginController = require('./admin-login.controller')

router.post('/login',adminLoginController.checkLogin);



module.exports = router;
