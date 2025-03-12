const Product = require( './../models/products'); // Reference to Product table

const getAllProducts = async (req, res) => {

   try{

    
    const products = await Product.findAll();
    // const productsData = allProducts.map(product => product.toJSON());

        // console.log("Your products are : ", productsData);

    res.render( "products", {products});
    
   }catch(error){
        console.log( "Error in GET ALL PRODUCTS : "+error);
   }
    
}

module.exports = {
    getAllProducts
}