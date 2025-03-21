const SQ = require('sequelize');
const {DATABASE} = require('../util/database');

const User = DATABASE.define(
    "users",

    {

        id : {

            type : SQ.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true,
            
        },

        name : {

            type : SQ.STRING,
            allowNull : false
            
        },

        email : {

            type : SQ.STRING,
            allowNull : false
            
        }
        
    }
);

module.exports = { User };