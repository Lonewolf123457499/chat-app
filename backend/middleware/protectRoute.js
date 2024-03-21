import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectRoute= async (req,res,next)=>{
    try
    {
        const token=req.cookies.jwt;
        if(!token)
        {
            return res.status(401).json({msg:"Unauthorized- No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECERT);
        if(!decoded)
        {
            return res.status(401).json({error:"Unauthorized - Invalid Token"})
        }

        const user=await User.findById(decoded.userId).select("-password");

        if(!user)
        {
            return res.status(404).json({msg:"User not found"});
        }

        req.user=user;
        next();
    }
    catch(error)
    {
        console.log("Error in protectRoute middleware:", error.message)
        res.status(500).json({Error:" Internal Server error"});

    }
}

export default protectRoute;