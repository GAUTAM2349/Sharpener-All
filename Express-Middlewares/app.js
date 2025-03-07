const express = require('express');
const app = express();
const PORT = 5506;

app.use( (req, res, next) => {

    console.log(` ${req.method} made to ${req.path} `);
    next();
    
} )


app.get( '/products', (req,res) => {

    res.send( "Here is the list of all products.");
    
} )


app.get( '/categories', (req, res) => {

     res.send("Here is the list of all categories.");

} )

app.post( '/products', (req,res)=>{

    res.send("A new order has been products.")

} )

app.post( '/categories', (req,res) => {

    res.send("A new user has been categories");
    
} )

app.use( '*', (req,res) => {
    res.end( "<h1>404 - Page Not Found</h1>");
} )



app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )