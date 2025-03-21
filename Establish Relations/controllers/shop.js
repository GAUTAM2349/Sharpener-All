const { Product } = require('../models/product');


const getProducts = async (req, res) => {

    try{

        console.log("\n\n request came to shop route \n\n");

    const allProduct = await Product.findAll();

    res.status(200).json({

        success : true,
        message : " Succesfully fetched all shopping products ",
        products : allProduct
        
    })
        
    } catch(error){

        res.status(500).json({
            success : false,
            message : " SERVER ERROR ",
            error : error
        })
        
    }
    
}

module.exports = {
    getProducts
}