const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {

    res.send("Courses: Frontend, Backend");
    
} )



router.get('/:id', (req,res) => {

    const id = req.params.id;

    if( id == '1')
        res.send("Course: Frontend, Description: HTML, CSS, JS, React");

    else if( id == '2' )
        res.send("Backend Course");

    else
        res.send("Student not found");
    
} )



module.exports = router;