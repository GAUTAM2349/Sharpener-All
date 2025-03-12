const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Sharpener',
    'root',
    'openitsoon',
    {
        host : 'localhost',
        dialect: 'mysql'
    }
);

async function startServer(){

    try{

        
    await sequelize.authenticate();
    console.log("Database connection established successfully...");

    await sequelize.sync();
    console.log(" All tables are Synces..");
        
    }catch(error){
        console.error( error );
    }
    
}

module.exports = {startServer,sequelize};