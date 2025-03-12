const express = require('express');
const router = express.Router();
const {getAllProducts} = require('./../controllers/products');

// console.log(getAllProducts);
router.get( '/', getAllProducts );

module.exports = {
    router
}