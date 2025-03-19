const Sequelize = require('sequelize');




const DATABASE = new Sequelize( 
    "tests",
    "root",
    "openitsoon",
    {
        host : "localhost",
        dialect : "mysql"
    }
 );


const startDatabase = async () => {

    try{

    await DATABASE.authenticate();
    console.log("\n\nDatabase Authenticated...\n\n");

    await DATABASE.sync( { force : true } );
    console.log("\n\nDatabase Synced\n\n");


    }catch(error){

        console.log("\n\nSome error occured in Starting Database ::: "+ error);
        Promise.reject();
    }
    
}

module.exports = { DATABASE, startDatabase };