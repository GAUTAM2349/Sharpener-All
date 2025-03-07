const express = require('express');
const router = express.Router();
const { cartGetRequest, cartGetRequestWithParam, cartPostRequest, cartPostRequestWithParam } = require('../controllers/cart');


router.get('/',  cartGetRequest );


router.post('/', cartPostRequest );


router.get('/:id', cartGetRequestWithParam );


router.post( '/:id', cartPostRequestWithParam );



module.exports = router;