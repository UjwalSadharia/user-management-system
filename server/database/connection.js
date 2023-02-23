// getting mongoose module to connect with the mongodb 
const mongoose = require('mongoose');


//creating function for DB connection
const connectDB=async()=>{
    try {
        // mongo DB conn string 
        const conn = await mongoose.connect(process.env.MONGO_URI)



        //below are the optional parameters for connection
        // ,{
        //     useNewUrlParser:true,
        //     useUnifiedTopology:true,
        //     useFindAndModify:false,
        //     useCreateIndex:true
        // }


        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB