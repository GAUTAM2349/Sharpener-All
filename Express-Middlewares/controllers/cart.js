

const cartGetRequest = (req,res) => {

    res.send("Fetching all products");
    
};



const cartPostRequest = (req,res) => {

    res.send("Adding a new product");
    
};



const cartGetRequestWithParam =  (req,res) => {

    const id = req.params.id;

    res.send("Fetching product to cart for user with ID : "+id);
    
} 

const cartPostRequestWithParam = (req,res) => {

    const id = req.params.id;

    res.send("Adding product to cart for user with ID : "+id);
    
};



module.exports = {
    cartGetRequest,
    cartGetRequestWithParam,
    cartPostRequest,
    cartPostRequestWithParam
};
