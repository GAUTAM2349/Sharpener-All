const express = require('express');
const app = express();
const PORT = 5508;

const booksRouter = require('./routes/books');



app.use( express.urlencoded({extended:true}));
app.use( express.json() );

app.use( '/books', booksRouter);

app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )