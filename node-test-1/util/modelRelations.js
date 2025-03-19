const { Attendance } = require('../models/Attendance');
const { Student } = require('../models/Student');
const { Dates } = require('../models/Date');


// student - Attendance -> a sutudent can appear multiple time in attendance,, but each student in attendance
//           should refer to only one uniqe student in Student table -> ONE - to - MANY

// date - Attendance -> a date will appear multiple times in attendance, 


const setModelsRelation = () => {


Student.hasMany( Attendance );
Attendance.belongsTo( Student );

Dates.hasMany( Attendance );
Attendance.belongsTo( Dates );
    
};



module.exports = { setModelsRelation };