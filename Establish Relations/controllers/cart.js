const { Product } = require('../models/product');
const { User } = require( '../models/users' );
const { Cart } = require( '../models/cart' );
const { CartItem } = require( '../models/cartItem' );


const addToCart = async (req,res) => {

    try{


    const user = req.user;
    const userCart = await user.getCart();

    const { productId } = req.body;
    const product = await Product.findByPk(productId);

    await userCart.addProduct( product, {

        through : { quantity : 1 }
        
    } );

    res.status(200).json({

        success : true,
        message : "Succesfully added to cart",
        product : product
        
    })
        
    } catch( error ){

        res.status(500).json({

            success : false,
            message : " can't add ",
            error : error
            
        })
        
    }
    
}

module.exports = { addToCart };