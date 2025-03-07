const express = require('express');
const router = express.Router();
const { productGetRequest, productGetRequestWithParam, productPostRequest} = require('../controllers/products');



router.get('/', productGetRequest );


router.post('/', productPostRequest );


router.get('/:id', productGetRequestWithParam );



module.exports = router;