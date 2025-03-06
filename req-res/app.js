
const http = require('http');
const PORT = 5504;

const server = http.createServer( ( req, res ) =>{

    if( req.url == "/home"){

        res.end("<h1>welcome to home</h1>")
        
    }else if( req.url == "/about"){

        res.end("welcome to about")

    }else if( req.url == "/node"){

        res.end("welcome to node")

    }else{

        res.end(" Page Not Found !!")
        
    }
    
} )


server.listen( PORT, ()=>{
    console.log("Server started....");
})

