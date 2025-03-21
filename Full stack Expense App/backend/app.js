const express = require('express');
const app = express();
const {sequelize} = require('./config/database');
const { Expense } = require('./models');
const { expenseRouter } = require('./routes');
const { logIncomingRequests } = require('./middlewares/requests');
const cors = require("cors");


const PORT = 3010;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use( logIncomingRequests );

app.use( '/expense', expenseRouter);



const syncDatabase = async () => {

    await sequelize.sync({alter : true});
    
}

syncDatabase();

app.listen( PORT, ()=>{
    console.log('SERVER STARTED....');
});