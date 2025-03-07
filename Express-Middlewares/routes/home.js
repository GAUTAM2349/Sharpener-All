
const express = require('express');
const router = express.Router();



router.get( '/', (req, res) => {
    

    res.send("<h1>E-commerce app pro</h1>");

} )


module.exports = router;
