const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const productController = new ProductController();

router.get('/getall', productController.get_products);
router.post('/add', productController.add_product);
router.get('/product_count',productController.get_product_count);

module.exports = router;
