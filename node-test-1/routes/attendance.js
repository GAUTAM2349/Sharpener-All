const express = require('express');
const router = express.Router();
const { postAttendance } = require( '../controllers/attendance' );


router.post( "/", postAttendance );


module.exports = {router};