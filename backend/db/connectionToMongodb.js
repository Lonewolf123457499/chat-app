import mongoose  from "mongoose";


const connectTomongoosedb= async()=>{
    try
    {
        // await mongoose.connect("mongodb://127.0.0.1:27017/chat-app-db");
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("mongodb is connected...")
    }
    catch(err){
        console.log("ERROR:",err);
    }
}
export  default connectTomongoosedb;