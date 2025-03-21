const express = require('express');
const router = express.Router();

const { getProducts } = require('../controllers/shop');


router.get( "/get-products", getProducts);



module.exports = { router };