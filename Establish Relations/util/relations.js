const { Product } = require('../models/product');
const { User } = require( '../models/users' );
const { Cart } = require( '../models/cart' );
const { CartItem } = require( '../models/cartItem' );








const setModelsRelations = () => {


User.hasMany( Product );
Product.belongsTo( User );

User.hasOne( Cart );
Cart.belongsTo( User );

Cart.belongsToMany( Product, { through : CartItem });
Product.belongsToMany( Cart, { through : CartItem });
    
};


module.exports = { setModelsRelations };