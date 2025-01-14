import User from "../models/user.model.js"

export async function getUsersForSidebar(req,res)
{
    try{

        const loggedInUserId=req.user._id
        const allUsers= await User.find({_id:{$ne:loggedInUserId}})

        return res.status(200).json(allUsers);
        }
    
    catch(error)
    {
        console.log("Error in getUserForSidebar:", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}