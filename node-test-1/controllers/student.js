const { Student} = require( '../models/Student' );

const getStudents = async ( req, res ) => {

    try{

        console.log(" \n\n request came on student router \n\n ");

    const students = await Student.findAll();

    res.status(200).json({

        success : true,
        message : "successfully fetched data",
        students : students
        
    });
        
    }catch(error){

        console.error( error );

        res.status(500).json( {

            success : false,
            message : "error getting students",
            error : error
            
        } )
        
    }
    
};

module.exports = { getStudents };

