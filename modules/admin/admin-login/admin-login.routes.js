const express = require('express');
const router = express.Router();
const adminLoginController = require('./admin-login.controller')

router.post('/login',adminLoginController.checkLogin);

router.post('/loginSeeding',adminLoginController.adminLogin)



module.exports = router;
