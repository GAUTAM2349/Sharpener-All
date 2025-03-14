const express = require("express");
const router = express.Router();
const {deleteProduct} = require("../controllers/delete");


router.post( "/:id/:naam", deleteProduct);

module.exports = {router};