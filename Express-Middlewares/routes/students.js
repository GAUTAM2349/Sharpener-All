const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {

    res.send("Student: Alice, Bob, Charlie");
    
} )



router.get('/:id', (req,res) => {

    const id = req.params.id;

    if( id == '1')
        res.send("Student: Alice, Bob, Charlie");

    else if( id == '2' )
        res.send("Student: Alice, Bob, Charlie");

    else if( id == '3' )
        res.send("Student: Alice, Bob, Charlie");

    else
        res.send("Student not found");
    
} )



module.exports = router;