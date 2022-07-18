const express = require('express');
const { paginatedResults } = require('../middlewares/pagination');
const Product = require('../models/product');
const router = express.Router();
const Controller = require('../controllers/productCtrl');

router.put('/product', Controller.uploadProduct);
// router.delete('/product/:id', auth, isUsersPrdouct, Controller.deleteProduct); //delete product
// router.get('/product/:id', Controller.getProfileProduct); //profile's products
router.get('/allproducts', paginatedResults(Product), Controller.getAllProducts); // by pagination to get all products
// router.get('/byproductid/:id', Controller.getProductById); // by product id
// router.get('/topProducts', Controller.topProducts); // top 5 products
// router.post('/like/:id', auth, Controller.likeProduct);
// router.post('/unlike/:id', auth, Controller.unlikeProduct);

module.exports = router;
