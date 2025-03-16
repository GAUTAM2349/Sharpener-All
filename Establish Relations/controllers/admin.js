const {Product} = require('../models/product');
const {User} = require('../models/users');

const postAddProduct = async (req, res) => {

    const { title, imageUrl, price, description } = req.body;


    try{

        // const product = await Product.create( { title, imageUrl, price, description } ); // initial code

        const user = req.user;
        const product = await user.createProduct( { title, imageUrl, price, description } );
        /* this functionality could have been achieved by adding userid manually in prev code, by fetching id
           of current user ( avialable through req.params.user ). But we don't need to , sequelize gives almost
           every function to deal with relations */

        console.log( "inserted : "+ JSON.stringify(product) );
        return res.status(201).json({
            success : true,
            message : "Congrats bhai, ho gaya insert",
            product : product
        });
        
    }catch(error){

        console.error("\n\n\nsome Error in inserting product in admin route "+ error);
        return res.status(500).json({
            success : false,
            message : "Nahi hua Create !!",
            error : error.message
        });
        
    }
    

}


const getProducts = async (req, res) => {

    try{

        // const products = await Product.findAll(); /* prev code
        //now we want to render only those products, which are releated to user being logged

        const products = await req.user.getProducts();

        return res.status(200).json({
        success : true,
        message : "success",
        products : products
        });
        
    }catch(error){

        return res.status(500).json({
            success : false,
            message : " !!Error Nhi mila bhai data",
            error : error.message
        })
        
    }
    
}


const getProduct = async (req,res) => {

    try{

        // const product = await Product.findAll({
        //     where : {
        //         id : req.params.id
        //     }
        // });  //prev code, now we have render user specific data

        const products = await req.user.getProducts({ where : { id : req.params.id }}); // returns array, for no ele, also array
        console.log("\n\n"+products+"\n\n");

        if( products.length == 0 ){
            console.log('hello');
            return res.status(404).json({
                message : "Nahi mila bro"
            });
            
        }


    
        return res.status(200).json( {
            success : true,
            message : " mil gaya bhai ",
            product : products[0]
        } );
        
        
    }catch(error) {

        return res.status(500).json({
            success : false,
            message : "Nahi mila bro",
            error : error
        });

    }
    
}



const getEditProduct = async (req,res) => {

    try{

        const product = await Product.findAll({
            where : {
                id : req.params.id
            }
        });
    
        return res.status(200).json( {
            success : true,
            message : " mil gaya bhai ",
            product : product[0]
        } );
        
        
    }catch(error) {

        return res.status(500).json({
            success : false,
            message : "Nahi mila bro",
            error : error
        });

    }
    
}




const postEditProduct = async (req, res) => {

    const { title, imageUrl, price, description } = req.body;
    
    try{

        const products = await Product.findAll({
            where : {
                id : req.params.id
            }
        });

        const product = products[0];

        product.title = title;
        product.imageUrl = imageUrl;
        product.price = price;
        product.description = description;

        await product.save();
        
        return res.status(200).json({
            success : true,
            message : " Successfully updated "
        })

        
    }catch(error){

        console.error("\n\n\n!!! some Error in updating product in admin route "+ error);

        return res.status(500).json({
            success : false,
            message : "Nahi hua Update !!",
            error : error.message
        });
        
    }
    

}

const deleteProduct = async ( req, res ) => {

    try{


    const products = await Product.findAll( {
        where : {
            id : req.params.id
        }
    });

    const product = products[0];

    await product.destroy();
    console.log("\n\n Successfully Deleted record\n\n");

    return res.status(200).json({
        success : true,
        message : "Succesfully deleted record"
    })
        
    }catch(error){

        return res.status(500).json({
            success : false,
            message : "Some error occured while deleting...please try again",
            error : error
        })
        
    }
    
}





//  route /admin/products - get all same
//  route /admin/index - get all same


module.exports = {getProducts, postAddProduct, getProduct, getEditProduct, postEditProduct, deleteProduct};