const express = require('express');
const app = express();
const PORT = 5508;

const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');


app.use( express.urlencoded({extended:true}));
app.use( express.json() );

app.use( '/categories', categoriesRouter);
app.use( '/products', productsRouter);


app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )