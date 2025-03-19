const SQ = require('sequelize');
const { DATABASE } = require('../util/database');



const Attendance = DATABASE.define( "attendance", {

    attendance_id : {
        type : SQ.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    status : {
        type : SQ.STRING,
        
    }


});



module.exports = { Attendance };