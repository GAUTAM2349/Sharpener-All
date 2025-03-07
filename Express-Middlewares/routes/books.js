
const express = require('express');
const router = express.Router();



router.get( '/', (req, res) => {
    console.log("coame in categories");

    res.send("Here is the list of books!");

} )



router.post( '/', (req,res) => {

   res.send("Book has been added!");
   
} )



module.exports = router;
