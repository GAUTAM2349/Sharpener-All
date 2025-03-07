

const productGetRequest = (req,res) => {

    res.send("Fetching all products");
    
};



const productPostRequest = (req,res) => {

    res.send("Adding a new product");
    
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
