

// getting env module
const dotenv = require('dotenv');
// getting morgan logging module
const morgan = require('morgan');
// getting express framework
const express = require('express');
// getting body parser module
const bodyparser = require('body-parser');
// getting path module of node js
const path = require('path');



// getting DB connection file
const connectDB = require('./server/database/connection');



// creating object of express 
const app = express();

// configuring dotenv file path
dotenv.config({path:'config.env'});
// assigning the port from env file or default 8080
const PORT = process.env.PORT || 8080;

// log request time using morgan 
app.use(morgan('tiny'));


//mongo DB Connection
connectDB();



// parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engine','ejs');

//load asset
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


//using all the routes from the router.js file
app.use('/',require('./server/routes/router'));





//listening to the port for nodemon
app.listen(PORT,()=>{
    console.log(`running on http://localhost:${PORT}`);
})