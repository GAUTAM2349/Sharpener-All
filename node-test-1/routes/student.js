const { getStudents } = require( '../controllers/student' );
const express = require('express');
const router = express.Router();



router.get( '/', getStudents );


module.exports = {router};