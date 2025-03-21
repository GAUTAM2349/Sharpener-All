const {DATABASE} = require('../util/database');
const SQ = require('sequelize');


const Cart = DATABASE.define('carts', {

    id : {

        type : SQ.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
        
    },

    
} )

module.exports = { Cart };