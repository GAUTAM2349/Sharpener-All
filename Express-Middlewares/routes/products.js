
const express = require('express');
const router = express.Router();


router.get( '/', (req,res) => {

    res.send( "Here is the list of all products.");
    
} )

router.post( '/', (req,res)=>{

    res.send("A new order has been products.")

} )

module.exports = router;