const express = require('express');
const router = express.Router();
const { addExpense, getExpense, updateExpense, getExpenses, deleteExpense } = require('../controllers/expense');




router.get( '/get-expenses', getExpenses );
router.get( '/get-expense/:id', getExpense );

router.post( '/add-expense', addExpense );

router.put( '/update-expense/:id', updateExpense );

router.delete( '/delete-expense/:id', deleteExpense);





module.exports = {router};