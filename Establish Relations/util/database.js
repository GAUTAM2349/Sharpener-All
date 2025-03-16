const Sequelize = require('sequelize');


const DATABASE = new Sequelize( 
    "LearningSequelize", 
    "root", 
    "openitsoon", 
    {
        host : "localhost",
        dialect : "mysql"
    }
 );


async function startDatabase() {

    try{    

    console.log("\n\nENTERED START DATABASE \n\n");
    await DATABASE.authenticate();
    console.log("Database started successfully");

    await DATABASE.sync(); // for dev environment only
    console.log("All tables are synced..");

    
    // const dummyUser = await User.findByPk(1);

    // if( !dummyUser ){
    //     await User.create( { name : "Rowdy Rathore", email : "rowdyrathore@gmail.com" } );
    //     console.log("\n\n Dummy user created..\n\n");
    // } /* above if block is non-standard code, and for our specific purpose only. Since we have not authentication method,
    //      we want to work on only one user, website will be assumed to be logined by first user in database. Otherwise with requests
    //      by default user invoking that request would have came , and we render accordingly. Hence above line of code ensure that
    //      their is atleast one user in User table, and we will apply a middleware for all requests in our app, where we will bind
    //      user property with req, with value as user we create here or simply, first user in User table. By standard this would 
    //      have been done in frontend where user id would had been appended to req as params */

    } catch(error){
        console.log(' !!! Some error in establishing Database connection!!!'  + error);  
    }
    
}

module.exports = { DATABASE , startDatabase };

