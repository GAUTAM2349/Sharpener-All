
const fs = require('fs');

const router = ( req, res ) =>{

    if( req.url == "/home"){

        res.setHeader('content-type', 'text/html');

        

        fs.readFile( 'form-data.txt', 'utf-8', (error,output)=>{

            if(error){
                res.statusCode = 500;
                res.end("SORRY!! an error occured in reading previous file..")
            }else{
                

                const form = `
            ${output}
            <form action='/message' method='post'>

                <input type = "text" name="message">
            <button type="submit"> Send Message </button>

            </form>
                    
        `

        res.write(form)
        res.end();
            }
            
        })

        // const form = `
        //     ${data}
        //     <form action='/message' method='post'>

        //         <input type = "text" name="message">
        //     <button type="submit"> Send Message </button>

        //     </form>
                    
        // `

        // res.write(form)
        // res.end();
        
    }else if( req.url == "/message"){

        const allData = [];

        req.on( 'data', (chunk) => {
            console.log(chunk);
            allData.push(chunk);
        })

        req.on( 'error', ()=>{
            console.log("some error occured");
        })

        req.on( 'end', ()=>{
            fs.writeFile("form-data.txt", Buffer.concat(allData).toString(), (error)=>{
            
                if(error){
                    console.log("error writing file");
                    res.end();
                }
                else{

                    res.statusCode = 302;
                    res.setHeader( 'Location','/home');
                    res.end();
                    
                }
                

            });  
            
        })

        // fs.writeFile("form-data.txt", Buffer.concat(allData).toString(), (error)=>{
            
        //     console.log("error writing file")
        //     res.statusCode = 302;
        //     res.setHeader( 'Location','/home');
        //     res.end();
        // });  /* YOU CAN'T WRITE IT OUTSIDE, OTHERWISE NO DATA WILL GO IN TEXT-FILE,BECAUSE ARRIVING OF DATA HAS NOT ENDED */
        
        

    }else if( req.url == "/node"){

        res.end("welcome to node")

    }else{

        res.end(" Page Not Found !!")
        
    }
    
};

module.exports = router;