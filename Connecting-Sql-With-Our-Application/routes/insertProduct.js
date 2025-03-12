const express = require('express');
const router = express.Router();
const {insertProduct, insertProductPage} = require( './../controllers/insert');

// console.log(insertProduct);

router.get( '/', insertProductPage)
router.post( '/', insertProduct )


module.exports = {router};