const Product = require( './../models/products'); // Reference to Product table


const insertProduct = async (req, res) => {

    try{

        const {title, price, imageUrl, description } = req.body;
        await Product.create( {title, price, imageUrl, description } );
        res.redirect('/');
        
                
    }catch(error){

        console.error("error in PRODUCT INSERTION "+ error )
        
    }
    
}

const insertProductPage = (req,res) => {

    res.render( "insertProduct" );
    
}

module.exports = {
    insertProduct, insertProductPage
}
