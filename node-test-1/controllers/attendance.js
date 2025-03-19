const { Attendance } = require('../models/Attendance');
const { Student } = require('../models/Student');
const { Dates } = require('../models/Date');


const postAttendance = async (req, res) => {


    try{


        console.log( " \n\n request came on attendance router " );

        console.log("\n\n"+ JSON.stringify(req.body) + "\n\n\n");
        
        const data = req.body;

        // const date_temp = new Date( data.date );
    
    
        const dates = await Dates.findOrCreate({
            where: { date: data.date },
          });

          
          console.log("\n\n\n\n date without square bracket "+ JSON.stringify(dates[0]));
          
          ``
          const dateId = dates[0].date_id; ////
    
        
        const attendanceData = data.attendance;
    
    
        for (let i = 0; i < attendanceData.length; i++) {
    
            const { id, status } = attendanceData[i];
            
          
            // First, check if attendance already exists for this student and date
            const attendance = await Attendance.findOne({
              where: {
                studentStudentId: id,
                dateDateId: dateId, // The date of attendance
              },
            });
          
            if (attendance) {
              // If attendance exists, update it
              await attendance.update({ status });
            } else {
              // If attendance doesn't exist, create a new entry
              await Attendance.create({
                studentStudentId: id,
                dateDateId: dateId, // Using the date_id from the found/created date
                status,
              });
            }
          }
    
          
          res.json({});
        
    }catch( error ){

        console.log(error);
        res.json({
            message : "ERROR"
        })
        
    }
    
    

    
}

module.exports  = { postAttendance };