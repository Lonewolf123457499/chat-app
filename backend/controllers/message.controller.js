import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export   async function sendMessage(req,res)
{
    try{

        const {message}=req.body;
        console.log(message);
        const {id:recevierId}=req.params;
        const senderId=req.user._id;
         let conversation=await Conversation.findOne({
            participants:{$all:[senderId,recevierId]},
         })

         console.log(conversation);

         if(!conversation)
         {
            conversation=await Conversation.create({
                participants:[senderId,recevierId],
            })
         }
         console.log(conversation);

        //  const newMessage=  new Message({
        //     senderId,
        //     recevierId,
        //      message
        //  })
        const newMessage = new Message(
            {
                senderId,
                recevierId,
                message

            }
        )
         console.log(newMessage)

         if(newMessage)
         {
            conversation.messages.push(newMessage._id);
         }

         await Promise.all([conversation.save(),newMessage.save()])
         res.status(201).json(newMessage);
    }
    catch(error)
    {
        console.log("Error in sendMessage controllers:",error.message)
        res.status(500).json({msg:"Interval server error"})
    }
}


export async function getMessages(req,res)
{
    try
    {

        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation= await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages")

        if(!conversation)
        {
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(200).json(messages);

    }
    catch(error)
    {
        console.log("Error in getMessage  controllers:", error.message)
        res.status(500).json({ msg: "Interval server error" })
    }
    
}