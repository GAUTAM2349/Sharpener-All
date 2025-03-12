const {startServer} = require('./connections');
const { router : insertRouter } = require('./routes/insertProduct');
const { router : getProducts } = require('./routes/products');
const { router : deleteProduct } = require('./routes/delete-product');
const cors = require('cors');
const path = require('path');

const express = require('express');
const app = express();

const PORT = 5509;

app.use( cors() );
app.use( express.urlencoded( { extended : true}) );
app.use( express.json() );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use( '/insert-data', insertRouter);
app.use( '/delete-product', deleteProduct);
app.use( '/', getProducts );

startServer()
    .then( () => {
        app.listen( PORT, ()=> {console.log("Server Started and Database Synced..") } );
    })
    .catch((error) => {
        console.error(error);
    });






