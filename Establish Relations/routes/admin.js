const express = require('express');
const {getProducts, postAddProduct, getProduct, getEditProduct, postEditProduct, deleteProduct} = require('../controllers/admin');
const router = express.Router();

router.get('/get-products', getProducts);
router.post('/post-add-product', postAddProduct );
router.get( '/get-product/:id', getProduct);
router.get( '/get-edit-product/:id', getEditProduct );
router.post( '/post-edit-product/:id', postEditProduct );
router.delete( '/delete-product/:id', deleteProduct );


module.exports = { router };