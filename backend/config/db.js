const mongoose  = require("mongoose");

const connectDB = async () =>{
//    process.env.MONGO_URL

        await mongoose.connect("mongodb+srv://narayandutta:narayandutta2208@cluster0.hrnfor2.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>{
                console.log('MongoDb Database connected');
            }).catch((e)=>{
                console.log("error: ", e);
                console.log('Error connecting MongoDB');
            })
   
}




module.exports = connectDB;