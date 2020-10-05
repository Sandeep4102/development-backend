const express = require('express');
const router = express.Router();
const productController = require('./admin-catalog-controller')
var upload = require('../../../middlewares/uploadMiddleware');

router.post('/registerProd',upload.single("image"),productController.registerProd);

router.post('/searchPartNumber',productController.searchPartNumber)

router.get('/getProductList',productController.getProduct)

router.get('/image/:id',productController.image)

router.get('/typeOfProd',productController.typeOfProd)

router.delete('/delete/:id',productController.deleteProduct)

module.exports = router;
