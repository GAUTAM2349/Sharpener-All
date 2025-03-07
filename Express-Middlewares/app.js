const express = require('express');
const app = express();
const PORT = 5508;

const homeRouter = require('./routes/home');
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');



app.use( express.urlencoded({extended:true}));
app.use( express.json() );

app.use( '/', homeRouter);
app.use( '/courses', coursesRouter);
app.use( '/students', studentsRouter);

app.listen( PORT , () => {
    console.log( "Server started at Port : " + PORT );
} )