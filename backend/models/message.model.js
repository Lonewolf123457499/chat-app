import mongoose from "mongoose";
const messageSchema= new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
     recevierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message:
    {
        type:String
    }
  
},
{
    timestamps :true
})


const Message=mongoose.model("Message",messageSchema);

export default Message;