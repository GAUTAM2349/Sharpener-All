
const express = require('express');
const router = express.Router();



router.get( '/', (req, res) => {
    console.log("coame in categories");

    res.send("Here is the list of all categories.");

} )



router.post( '/', (req,res) => {

   res.send("A new user has been categories");
   
} )



module.exports = router;
