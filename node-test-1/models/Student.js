const SQ = require('sequelize');
const { DATABASE } = require('../util/database');


const Student = DATABASE.define( "students", 
    {

        student_id : {
            type : SQ.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },

        name : {
            type : SQ.STRING,
            allowNull : false
        }
        
    }
 );


module.exports = { Student };