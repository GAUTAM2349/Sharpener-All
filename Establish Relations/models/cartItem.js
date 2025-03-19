const {DATABASE} = require('../util/database');
const SQ = require('sequelize');


const CartItem = DATABASE.define( 'cart-items', {

    cart_item_id : {

        type : SQ.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
        
    }, 

    quantity : SQ.INTEGER
    
} );

module.exports = { CartItem };


/* this model is an intermediary required to establish many-to-many relationship between CART and PRODUCT models.

*/