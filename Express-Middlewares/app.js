const express = require('express');
const app = express();
const PORT = 5508;

const homeRouter = require('./routes/home');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const cartRouter = require('./routes/cart');



app.use( express.urlencoded({extended:true}));
app.use( express.json() );
app.use( express.static('public') );

app.use( '/', homeRouter);
app.use( '/products', productsRouter);
app.use( '/users', usersRouter);
app.use( '/cart', cartRouter);

app.use( '*', (req,res) => {
    res.send("<h1> Error 404 </h1>");
} )

app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )