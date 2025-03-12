const sq = require('sequelize');
const {sequelize} = require( './../connections'); // reference to created database in connection.js file

const Product = sequelize.define('products',
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


module.exports = Product; // products table reference