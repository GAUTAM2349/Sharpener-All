const { DATABASE } = require('../util/database');
const sq = require('sequelize');

const Product = DATABASE.define('products',
    {

        id: {
            type : sq.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },

        title : sq.STRING,  
                // if only one attribute is requried then parenthesis not required
        price : {
            type : sq.INTEGER,
            allowNull : false
        },
        
        imageUrl : {
            type : sq.STRING,
            allowNull : false
        },

        description : {
            type : sq.STRING,
            allowNull : false
        }
        
    }
);


module.exports = {Product}; // products table reference