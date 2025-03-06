const router = require('./routes');

const http = require('http');
const PORT = 5504;

const server = http.createServer( router );


server.listen( PORT, ()=>{
    console.log("Server started....");
})

