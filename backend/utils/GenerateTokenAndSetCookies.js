
const jwt=require('jsonwebtoken');
const cookie=require('cookie');

const GenerateTokenAndSetCookies=(user,res)=>{
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.cookie('token',token,{httpOnly:true,maxAge:24*60*60*1000});
    return token;
}

module.exports=GenerateTokenAndSetCookies