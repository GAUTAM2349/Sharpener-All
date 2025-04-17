const { RAW } = require('sequelize/lib/query-types');
const { Expense } = require('../models');


const getExpenses = async (req, res) => {

    try {

        const expenses = await Expense.findAll();
        console.log(" expenseS sent successfully ");

        res.status(200).json(expenses);
        
        
    }catch(error){

        res.status(500).json({ 
            message : " \n\nError fetch expenseS from database\n\n",
            error : error.message 
        });
        
    }
    
} 

const getExpense = async (req, res) => {

    try{

        const expense = await Expense.findByPk(req.params.id);
        console.log(" expense sent successfully");
        res.status(200).json(expense);
        
    }catch(error){

        console.log(error);
        res.status(500).json({
            message : " \nError fetching expense from database\n"
        })
        
    }
    
}


const addExpense = async (req, res) => {
    const { expenseName, expenseDate, expenseAmount } = req.body;
    console.log({ expenseName, expenseDate, expenseAmount });

    
    try {
        const expense = await Expense.create({ 
            expenseName, 
            expenseDate, 
            expenseAmount 
        });
        console.log("\n\n successfully inserted an expense \n\n");
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add expense' }); 
    }
};



const updateExpense = async (req, res) => {
    const { id } = req.params;
    const { expenseName, expenseDate, expenseAmount } = req.body;
    
    try {
        const expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }

        expense.expenseName = expenseName;
        expense.expenseDate = expenseDate;
        expense.expenseAmount = expenseAmount;

        await expense.save();
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update expense' });
    }
}


const deleteExpense = async (req,res) => {

    try{

    const id = req.params.id;

    const expense = await Expense.findByPk(id);
    await expense.destroy();
    console.log("\n\n Deleted Successfully \n\n");

    res.status(200).json({
        success : true,
        message : "Deleted successuflly"
    })
    
    }catch(error){

        res.status(500).json({
            success : false,
            message : "Error deleting expense",
            error : error.message
        })
        
    }
}


module.exports = { addExpense, getExpense, updateExpense, getExpenses, deleteExpense };