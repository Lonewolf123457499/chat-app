import User from "../models/user.model.js"

import bycrypt from"bcryptjs"
import generateTokenAndSetCookies from "../utils/generateToken.js";
export  const signup= async (req,res)=>{
    try
    {
    
    const{fullName,username,password,confirmPassword,gender}=req.body;
    if(password!==confirmPassword)
    {
        return res.status(400).json({msg:"password don't match"});
    }
    const user=  await User.findOne({username});
    if(user)
    {

        return res.status(400).json({msg:"username already exists"});


    }

    const salt= await bycrypt.genSalt(10);
    const hashedPassword= await bycrypt.hash(password,salt);

        const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        const newUser=new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePics:gender==="male"?boyProfilePic:girlProfilePic
        })
       if(newUser)
       {
        //  generate the JSON web Token here
        generateTokenAndSetCookies(newUser._id,res);
        await newUser.save()
       }

        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePics:newUser.profilePics
        })
}
catch(error)
{
    console.log("Error in the signup controller",error.message)
    res.status(500).json({msg:"internal error"})
}
}

export const login = async(req, res) => {
    try
    {
        const {username,password}=req.body;

        const  user= await User.findOne({username});
        const isPasswordCorrect= await bycrypt.compare(password,user?.password||"");
        if(!user|| !isPasswordCorrect)
        {
            return res.status(400).json({msg:"invaild username or password"});
        }

        generateTokenAndSetCookies(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePics:user.profilePics
        });


    }
    catch(error){
        console.log("Error in the LogIn controller", error.message)
        res.status(500).json({ msg: "internal error" })
    }
    }


export const logout = (req, res) => {
    try
    {
        res.cookie("jwt", " ", { maxAge: 0 })
        res.status(200).json({ msg: "Logged out successfully" })
    }
    catch(error)
    {
        console.log("Error in the LogOut controller", error.message)
        res.status(500).json({ msg: "internal error" })
    }
        
    }
