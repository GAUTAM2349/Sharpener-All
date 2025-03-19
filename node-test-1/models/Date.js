const SQ = require('sequelize');
const { DATABASE } = require('../util/database');


const Dates = DATABASE.define( "dates", {

    date_id : {
        type : SQ.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    }, 

    date : {
        type : SQ.DATE,
        allowNull : true
    }
    
});



module.exports = { Dates };