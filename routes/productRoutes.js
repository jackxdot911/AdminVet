const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all veterinary products
router.get('/', productController.getAllProducts);

// Route to create a new veterinary product
router.post('/', productController.createProduct);

module.exports = router;
