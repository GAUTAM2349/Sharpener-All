const express = require('express');
const router = express.Router();
const { addToCart } = require( '../controllers/cart' );


router.post( '/add-to-cart', addToCart );

module.exports = {router};