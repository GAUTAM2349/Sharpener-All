const path = require('path');

const productGetRequest = (req,res) => {

    const myFile = path.join( __dirname, '../views/products.html');

    res.sendFile(myFile);
    
};



const productPostRequest = (req,res) => {

    console.log( req.body );
    res.json({ value : "user added product"});
    
};



const productGetRequestWithParam =  (req,res) => {

    const id = req.params.id;

    res.send("Fetching product with ID : "+id);
    
};


module.exports = {
    productGetRequest,
    productGetRequestWithParam,
    productPostRequest
};
