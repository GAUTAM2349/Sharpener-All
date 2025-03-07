const express = require('express');
const app = express();
const PORT = 5506;




app.use( "/welcome", ( req, res, next ) => {

    req.user = "Gautam";
    next();

} )


app.get( "/", ( req, res ) => {

    res.send( " Home Page " );
    
} )

app.get( "/welcome", (req,res)=>{

    res.send(
        `
        <h1> ${req.user} </h1>
        `
    )

})









app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )