const User = require("../models/User")

const isAdmin = async(req , res , next)=>{
    try{
        const userToVerify = await User.findById(req.user.user_id);

        if(userToVerify.auth === 'Staff'){
            req.isAdmin = false;
        }
        else{
            req.isAdmin = true;
        }
        next();
    }catch(err){
        return res.status(400).send(err.message);
    }
}

module.exports = isAdmin;