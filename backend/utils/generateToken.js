import jwt from"jsonwebtoken"
const generateTokenAndSetCookies=(userId,res)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECERT,
        {
            expiresIn:'15d'
        })
        res.cookie("jwt",token,{
            maxAge:15*24*60*60*1000,
            //  prevent the xss attracks  cros
            httpOnly:true,
            sameSite:"strict",
        })
}

export default generateTokenAndSetCookies;