const express = require('express');
const app = express();
const PORT = 5506;


app.get( '/orders', (req,res) => {

    res.send( "Here is the list of all orders.");
    
} )


app.get( '/users', (req, res) => {

     res.send("Here is the list of all users.");

} )

app.post( '/orders', (req,res)=>{

    res.send("A new order has been created.")

} )

app.post( '/users', (req,res) => {

    res.send("A new user has been added");
    
} )



app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )