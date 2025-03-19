const path = require('path');
const express = require('express');
const {startDatabase} = require('./util/database');
const app = express();

const { createDummyUser } = require("./util/createDummyUser");
const { setModelsRelations } = require( './util/relations' );

app.use( express.urlencoded( { extended : true } ) );
app.use( express.json() );



app.use( async (req, res, next) => {

    try{
        
    const user = await User.findByPk(1);
    req.user = user;
    next();

    }catch(error){

        res.status(500).send(" SORRY THEIR IS NO USER TO DISPLAY "); // TO add dymmy user to reqest params - non-satandard code

    }
    
} )



const { router : adminRouter } = require('./routes/admin');
// const shopRoutes = require('./routes/shop');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
// app.use(shopRoutes);

// app.use(errorController.get404);


/* Defining reln on models */


setModelsRelations();

startDatabase()

    .then( () => {
        createDummyUser();
    })
    
    .then( () => {
        app.listen(3001);
    });

