const mongoose  = require("mongoose");

const connectDB = async () =>{


        await mongoose.connect("mongodb+srv://narayandutta:narayandutta2208@cluster0.hrnfor2.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
                console.log('MongoDb Database connected');
            }).catch((e)=>{
                console.log("error: ", e);
                console.log('Error connecting MongoDB');
            })
   
}




module.exports = connectDB;
// const mongoose = require("mongoose");

// console.log(process.env.MONGO_URL, "url");
// const connectDB = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("MONGO_URL environment variable is not defined");
//     }

//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDb Database connected");
//   } catch (e) {
//     console.error("Error connecting MongoDB:", e.message);
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// require('dotenv').config();

// console.log(process.env.MONGO_URL);
// const connectDB = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("MONGO_URL environment variable is not defined");
//     }

//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("MongoDb Database connected");
//   } catch (e) {
//     console.error("Error connecting MongoDB:", e.message);
//   }
// };

// module.exports = connectDB;


