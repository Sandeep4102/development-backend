const express = require('express');
const router = express.Router();
const productController = require('./admin-catalog-controller')

router.post('/registerProd',productController.registerProd);

router.get('/getProductList',productController.getProduct)


module.exports = router;
