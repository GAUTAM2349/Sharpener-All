const express = require('express');
const app = express();

const PORT = 8011;

app.use( express.urlencoded( { extended : true } ) );
app.use( express.json() );

const { startDatabase , DATABASE } = require('./util/database');
const { setModelsRelation } = require( './util/modelRelations' );
const { router : studentRouter } = require( './routes/student' );
const { router : attendanceRouter } = require( './routes/attendance');

const { Student } = require('./models/Student');


app.use( '/get-students', studentRouter );
app.use( '/post-attendance', attendanceRouter );


setModelsRelation();


startDatabase()
    .then( () => {
        app.listen( PORT, () => {
        console.log("server started....");
        })
    })
    .catch( (error)=> {console.log(error)});